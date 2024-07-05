import DatePicker from "react-datepicker";
import "../../styles/ScheduleManagement.scss";
import { useEffect, useState, useCallback } from "react";
import getDay from "date-fns/getDay";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
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

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [disabledTime, setDisabledTime] = useState([]);

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
      const disabledTime = scheduleManagementSnapshot.docs.map((doc) =>
        doc.data()
      );
      setDisabledTime(disabledTime);
    };
    fetchScheduleManagement();
  }, []);

  useEffect(() => {
    // console.log(disabledTime);
  }, [disabledTime]);

  const formatDate = (date) => {
    return moment(date).format("MMMM DD YYYY");
  };

  const formatDateTime = (date) => {
    return moment(date).format("MMMM DD YYYY hh:mm A");
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };

  const handleDateChange = (date) => {
    if (date && date instanceof Date && date.getHours() != 8) {
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
        console.log("else");
        setDisabledTime([
          ...disabledTime,
          { date: formattedDate, time: [formattedDateTime] },
        ]);
      }
    }
    setSelectedDate(date);
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
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

  let handleColor = (time) => {
    let dateTime = disabledTime.find(
      (dateObj) => dateObj.date === formatDate(time)
    );

    if (dateTime)
      return dateTime.time.some((time1) => time1 === formatDateTime(time))
        ? "disabledTime"
        : "";
  };

  const handleSave = async () => {
    try {
      const scheduleDocRef = collection(db, "scheduleManagement");

      const addTimes = async (disabledTime) => {
        disabledTime.map(async (dateTime) => {
          const q = query(scheduleDocRef, where("date", "==", dateTime.date));
          const querySnapshot = await getDocs(q);
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
        });
      };
      alert("Disabled times saved successfully!");
      addTimes(disabledTime);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="scheduleManagementPage">
      <div className="container">
        <DatePicker
          selected={selectedDate}
          className={
            selectedDate == null
              ? "dateTimeInvalid dateTimeSelector"
              : "dateTimeSelector"
          }
          onChange={handleDateChange}
          filterDate={isWeekday}
          filterTime={filterPassedTime}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Date"
          inline
          showTimeSelect
          timeIntervals={60}
          timeCaption="Time"
          minTime={setHours(setMinutes(new Date(), 59), 8)}
          maxTime={setHours(setMinutes(new Date(), 0), 17)}
          excludeTimes={getBookedTimesForDate(
            selectedDate ? selectedDate : new Date()
          )}
          timeClassName={handleColor}
        />

        <div className="buttons">
          <Button onClick={handleSave} type="submit" variant="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagement;
