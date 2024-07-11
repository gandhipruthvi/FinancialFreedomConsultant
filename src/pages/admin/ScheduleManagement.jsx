import DatePicker from "react-datepicker";
import "../../styles/ScheduleManagement.scss";
import { useEffect, useState, useCallback } from "react";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import moment from "moment-timezone";
import LoadingOverlay from "react-loading-overlay-ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [disabledTime, setDisabledTime] = useState([]);
  const [isLoadingActive, setLoadingActive] = useState(false);
  const [previousDate, setpreviousDate] = useState();

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsSnapshot = await getDocs(
        collection(db, "appointments")
      );
      const appointments = appointmentsSnapshot.docs.map((doc) => doc.data());
      setBookedSlots(appointments.map((app) => new Date(app.date)));
    };
    fetchAppointments();

    const fetchScheduleManagement = async () => {
      const scheduleManagementSnapshot = await getDocs(
        collection(db, "scheduleManagement")
      );

      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      setDisabledTime(
        scheduleManagementSnapshot.docs
          .map((doc) => doc.data())
          .filter((appDoc) => new Date(appDoc.date).getTime() >= currentDate)
      );
    };
    fetchScheduleManagement();
  }, []);

  const formatDate = (date) => {
    return moment(date).format("MMMM DD YYYY");
  };

  const formatDateTime = (date) => {
    return moment(date).format("MMMM DD YYYY hh:mm A");
  };

  const handleDateChange = (date) => {
    if (date && date instanceof Date) {
      if (previousDate && formatDate(date) != previousDate) {
        date.setHours(new Date().getHours());
        date.setMinutes(new Date().getMinutes());
      }
      const formattedDate = formatDate(date);
      const formattedDateTime = formatDateTime(date);

      let dateTime = disabledTime.find(
        (dateTime) => dateTime.date === formattedDate
      );
      if (dateTime) {
        let index = dateTime.time.indexOf(formattedDateTime);
        if (index == -1) {
          dateTime.time.push(formattedDateTime);
        } else {
          dateTime.time.splice(index, 1);
        }
      } else {
        setDisabledTime([
          ...disabledTime,
          { date: formattedDate, time: [formattedDateTime] },
        ]);
      }
      setSelectedDate(date);
      setpreviousDate(formattedDate);
    }
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date(time);

    if (
      disabledTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() === currentDate.toDateString()
      )
    )
      return false;

    return new Date().getTime() < currentDate.getTime();
  };

  const getBookedTimesForDate = (date) => {
    let timesToExclude = [];
    bookedSlots.forEach((slot) => {
      if (slot.toDateString() === date.toDateString()) {
        timesToExclude.push(slot);
      }
    });
    return timesToExclude;
  };

  let handleDayColor = (time) => {
    if (
      disabledTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() === new Date(time).toDateString()
      )
    )
      return "disabledDay";
  };

  let handleTimeColor = (time) => {
    if (
      disabledTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() === new Date(time).toDateString()
      )
    )
      return "";
    let dateTime = disabledTime.find(
      (dateObj) => dateObj.date === formatDate(time)
    );
    if (dateTime) {
      return dateTime.time.some((time1) => time1 === formatDateTime(time))
        ? "disabledTime"
        : "";
    }
  };

  const handleDayToggle = async () => {
    setLoadingActive(true);
    try {
      const formattedDate = formatDate(selectedDate);
      const scheduleDocRef = collection(db, "scheduleManagement");

      // Check if the document for the date exists
      const querySnapshot = await getDocs(
        query(scheduleDocRef, where("date", "==", formattedDate))
      );
      const dateDocs = querySnapshot.docs;

      if (dateDocs.length === 0) {
        await addDoc(scheduleDocRef, {
          date: formattedDate,
          disabled: true,
        });
        toast.success("Day disabled successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // Update the existing document to toggle the disabled flag
        const docRef = doc(db, "scheduleManagement", dateDocs[0].id);
        const currentData = dateDocs[0].data();
        const newDisabledStatus = !currentData.disabled;

        await updateDoc(docRef, {
          disabled: newDisabledStatus,
        });

        if (newDisabledStatus) {
          toast.success("Day disabled successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.success("Day enabled successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }

      // Refresh disabled times
      const updatedSnapshot = await getDocs(
        collection(db, "scheduleManagement")
      );
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      setDisabledTime(
        updatedSnapshot.docs
          .map((doc) => doc.data())
          .filter((appDoc) => new Date(appDoc.date).getTime() >= currentDate)
      );
    } catch (error) {
      toast.error("Unable to update day!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoadingActive(false);
  };

  const handleSave = async () => {
    setLoadingActive(true);
    try {
      const scheduleDocRef = collection(db, "scheduleManagement");

      const addTimes = async (disabledTime) => {
        disabledTime.map(async (dateTime) => {
          const querySnapshot = await getDocs(
            query(scheduleDocRef, where("date", "==", dateTime.date))
          );
          const dateDoc = querySnapshot.docs.map((doc) => doc.id);

          if (dateDoc.length === 0) {
            await addDoc(scheduleDocRef, {
              date: dateTime.date,
              time: dateTime.time,
            });
          } else {
            const docRef = doc(db, "scheduleManagement", dateDoc[0]);
            await updateDoc(docRef, {
              time: dateTime.time,
            });
          }

          // Refresh disabled times
          const updatedSnapshot = await getDocs(
            collection(db, "scheduleManagement")
          );
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() - 1);
          setDisabledTime(
            updatedSnapshot.docs
              .map((doc) => doc.data())
              .filter(
                (appDoc) => new Date(appDoc.date).getTime() >= currentDate
              )
          );
        });
      };
      addTimes(disabledTime);
    } catch (error) {
      toast.error("Unable to update!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setLoadingActive(false);
    toast.success("Time updated successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="scheduleManagementPage">
      <div className="container">
        <ToastContainer />
        <LoadingOverlay
          active={isLoadingActive}
          spinner
          text="Updating Available Time"
        >
          <DatePicker
            selected={selectedDate}
            className={
              selectedDate == null
                ? "dateTimeInvalid dateTimeSelector"
                : "dateTimeSelector"
            }
            onChange={handleDateChange}
            // filterDate={isWeekday}
            filterTime={filterPassedTime}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            inline
            showTimeSelect
            timeIntervals={60}
            timeCaption="Time"
            // minTime={setHours(setMinutes(new Date(), 59), 8)}
            // maxTime={setHours(setMinutes(new Date(), 0), 17)}
            excludeTimes={getBookedTimesForDate(
              selectedDate ? selectedDate : new Date()
            )}
            timeClassName={handleTimeColor}
            dayClassName={handleDayColor}
          />

          <div className="buttons">
            <Button
              onClick={handleSave}
              type="submit"
              variant="info"
              className="m-3"
            >
              Save Time Changes
            </Button>
            {disabledTime.some(
              (day) => day.date === formatDate(selectedDate) && day.disabled
            ) ? (
              <Button variant="primary" onClick={handleDayToggle}>
                Enable Day
              </Button>
            ) : (
              <Button variant="danger" onClick={handleDayToggle}>
                Disable Day
              </Button>
            )}
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
};

export default ScheduleManagement;
