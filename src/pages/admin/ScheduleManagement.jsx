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
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [disabledDateTime, setDisabledDateTime] = useState([]);
  const [disabledMonth, setDisabledMonth] = useState([]);
  const [disabledWeek, setDisabledWeek] = useState([]);
  const [isLoadingActive, setLoadingActive] = useState(false);
  const [previousDate, setpreviousDate] = useState();

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      const appointmentsSnapshot = await getDocs(
        collection(db, "appointments")
      );
      setBookedSlots(
        appointmentsSnapshot.docs
          .map((doc) => doc.data())
          .map((app) => new Date(app.date))
      );
    };
    fetchBookedSlots();

    const fetchScheuldeManagement = async () => {
      const scheduleManagementSnapshot = await getDocs(
        collection(db, "scheduleManagement")
      );
      setDisabledDateTime(
        scheduleManagementSnapshot.docs
          .map((doc) => doc.data())
          .filter(
            (appDoc) =>
              new Date(appDoc.date).getTime() >= yesterdayDate.getTime()
          )
      );
    };
    fetchScheuldeManagement();

    const fetchScheuldeManagementMonth = async () => {
      const scheduleManagementMonthSnapshot = await getDocs(
        collection(db, "scheduleManagementMonth")
      );
      setDisabledMonth(
        scheduleManagementMonthSnapshot.docs
          .map((doc) => doc.data())
          .filter(
            (appDoc) =>
              new Date(appDoc.month).getMonth() >= new Date().getMonth()
          )
      );
    };
    fetchScheuldeManagementMonth();

    const fetchScheuldeManagementWeek = async () => {
      const scheduleManagementWeekSnapshot = await getDocs(
        collection(db, "scheduleManagementWeek")
      );
      setDisabledWeek(
        scheduleManagementWeekSnapshot.docs
          .map((doc) => doc.data())
          .filter((appDoc) => appDoc.year >= new Date().getFullYear())
      );
    };
    fetchScheuldeManagementWeek();
  }, []);

  const formatDate = (date) => {
    return moment(date).format("MMMM DD YYYY");
  };

  const formatDateTime = (date) => {
    return moment(date).format("MMMM DD YYYY hh:mm A");
  };

  const getMonthNumber = (date) => {
    return new Date(date).getMonth();
  };

  const handleDateChange = (date) => {
    if (date && date instanceof Date) {
      if (previousDate && formatDate(date) != previousDate) {
        date.setHours(new Date().getHours());
        date.setMinutes(new Date().getMinutes());
      }
      const formattedDate = formatDate(date);
      const formattedDateTime = formatDateTime(date);

      let dateTime = disabledDateTime.find(
        (dateTime) => dateTime.date === formattedDate
      );
      if (dateTime && dateTime.time) {
        let index = dateTime.time.indexOf(formattedDateTime);
        if (index == -1) {
          dateTime.time.push(formattedDateTime);
        } else {
          dateTime.time.splice(index, 1);
        }
      } else {
        setDisabledDateTime([
          ...disabledDateTime,
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
      disabledMonth.some(
        (item) =>
          item.disabled &&
          new Date(item.month).getMonth() == new Date(time).getMonth()
      )
    )
      return false;

    const currentWeekNumber = moment(time).week();
    if (
      disabledWeek.some(
        (item) =>
          item.year &&
          item.year == new Date(time).getFullYear() &&
          item.week.includes(currentWeekNumber)
      )
    )
      return false;

    if (
      disabledDateTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() === currentDate.toDateString()
      )
    )
      return false;

    return new Date().getTime() < currentDate.getTime();
  };

  const minimumDate = () => {
    if (
      disabledMonth.some(
        (item) =>
          item.disabled &&
          new Date(item.month).getMonth() == new Date().getMonth()
      )
    )
      return new Date().setDate(1);

    const currentWeekNumber = moment(new Date()).week();
    if (
      disabledWeek.some(
        (item) =>
          item.year &&
          item.year == new Date().getFullYear() &&
          item.week.includes(currentWeekNumber)
      )
    ) {
      let d = new Date();
      let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1);
      return new Date(d.setDate(diff - 1));
    }

    return new Date();
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

  const handleDayColor = (dateTime) => {
    if (
      disabledMonth.some(
        (item) =>
          item.disabled &&
          new Date(item.month).getFullYear() ==
            new Date(dateTime).getFullYear() &&
          new Date(item.month).getMonth() == new Date(dateTime).getMonth()
      )
    )
      return "disabledMonth";

    const currentWeekNumber = moment(dateTime).week();
    if (
      disabledWeek.some((item) => {
        return (
          item.year == new Date(dateTime).getFullYear() &&
          item.week.includes(currentWeekNumber) &&
          "" + moment(dateTime).year() + moment(dateTime).format("ww") >=
            "" + moment(new Date()).year() + moment(new Date()).format("ww")
        );
      })
    )
      return "disabledWeek";

    if (
      disabledDateTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() ===
            new Date(dateTime).toDateString()
      )
    )
      return "disabledDay";
  };

  const handleTimeColor = (time) => {
    if (
      disabledDateTime.some(
        (item) =>
          item.disabled &&
          new Date(item.date).toDateString() === new Date(time).toDateString()
      )
    )
      return "";

    const currentWeekNumber = moment(time).week();
    if (
      disabledMonth.some(
        (item) => item.week && item.week.includes(currentWeekNumber)
      )
    )
      return "";

    let dateTime = disabledDateTime.find(
      (dateObj) => dateObj.date === formatDate(time)
    );
    if (dateTime && dateTime.time) {
      return dateTime.time.some((time1) => time1 === formatDateTime(time))
        ? "disabledDateTime"
        : "";
    }

    return "";
  };

  const handleMonthToggle = async () => {
    setLoadingActive(true);
    try {
      const formattedMonth = moment(selectedDate).format("MMMM YYYY");
      const scheduleDocRef = collection(db, "scheduleManagementMonth");

      // Check if the document for the date exists
      const querySnapshot = await getDocs(
        query(scheduleDocRef, where("month", "==", formattedMonth))
      );
      const monthDocs = querySnapshot.docs;

      if (monthDocs.length === 0) {
        await addDoc(scheduleDocRef, {
          month: formattedMonth,
          disabled: true,
        });
        toast.success("Month disabled successfully", {
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
        const docRef = doc(db, "scheduleManagementMonth", monthDocs[0].id);
        const newDisabledStatus = !monthDocs[0].data().disabled;

        await updateDoc(docRef, {
          disabled: newDisabledStatus,
        });

        if (newDisabledStatus) {
          toast.warn("Month disabled successfully", {
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
          toast.success("Month enabled successfully", {
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

      // Refresh disabled month
      const scheduleManagementMonthSnapshot = await getDocs(
        collection(db, "scheduleManagementMonth")
      );
      setDisabledMonth(
        scheduleManagementMonthSnapshot.docs
          .map((doc) => doc.data())
          .filter(
            (appDoc) =>
              new Date(appDoc.month).getMonth() >= new Date().getMonth()
          )
      );
    } catch (error) {
      console.log(error);
      toast.error("Unable to update the month!", {
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
      setDisabledDateTime(
        updatedSnapshot.docs
          .map((doc) => doc.data())
          .filter((appDoc) => new Date(appDoc.date).getTime() >= yesterdayDate)
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

      const addTimes = async (disabledDateTime) => {
        disabledDateTime.map(async (dateTime) => {
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
          setDisabledDateTime(
            updatedSnapshot.docs
              .map((doc) => doc.data())
              .filter(
                (appDoc) => new Date(appDoc.date).getTime() >= yesterdayDate
              )
          );
        });
      };
      addTimes(disabledDateTime);
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

  const handleWeekToggle = async () => {
    setLoadingActive(true);
    try {
      const selectedWeekNumber = moment(selectedDate).week();
      const scheduleDocRef = collection(db, "scheduleManagementWeek");

      // Check if the document for the year exists
      const querySnapshot = await getDocs(
        query(
          scheduleDocRef,
          where("year", "==", new Date(selectedDate).getFullYear())
        )
      );
      let weekDocs = querySnapshot.docs;

      if (weekDocs.length === 0) {
        await addDoc(scheduleDocRef, {
          year: new Date(selectedDate).getFullYear(),
          week: [selectedWeekNumber],
        });
        toast.success("Week disabled successfully", {
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
        const docRef = doc(db, "scheduleManagementWeek", weekDocs[0].id);

        if (weekDocs[0].data().week) {
          let weekArray = weekDocs[0].data().week;
          let index = weekArray.indexOf(selectedWeekNumber);
          if (index == -1) {
            weekArray.push(selectedWeekNumber);
          } else {
            weekArray.splice(index, 1);
          }

          await updateDoc(docRef, {
            week: weekArray,
          });

          if (index == -1) {
            toast.warn("Week disabled successfully", {
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
            toast.warn("Week enabled successfully", {
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
        } else {
          await updateDoc(docRef, {
            week: [selectedWeekNumber],
          });
          toast.warn("Week disabled successfully", {
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

      // Refresh disabled month
      const scheduleManagementWeekSnapshot = await getDocs(
        collection(db, "scheduleManagementWeek")
      );
      setDisabledWeek(
        scheduleManagementWeekSnapshot.docs
          .map((doc) => doc.data())
          .filter((appDoc) => appDoc.year >= new Date().getFullYear())
      );
    } catch (error) {
      console.log(error);
      toast.error("Unable to update the week!", {
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

  return (
    <div className="scheduleManagementPage">
      <div className="container">
        <ToastContainer />
        <LoadingOverlay
          active={isLoadingActive}
          spinner
          text="Updating Available Time"
        >
          <div className="colorDisplay">
            <div className="d-flex">
              <div className="box red"></div>
              <div>Disabled Date</div>
            </div>

            <div className="d-flex">
              <div className="box grey"></div>
              <div>Disabled Time</div>
            </div>

            <div className="d-flex">
              <div className="box yellow"></div>
              <div>Disabled Month</div>
            </div>

            <div className="d-flex">
              <div className="box blue"></div>
              <div>Disabled Week</div>
            </div>
          </div>
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
            minDate={minimumDate()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            inline
            showTimeSelect
            timeIntervals={30}
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
            <Button onClick={handleSave} variant="secondary" type="submit">
              Save Time Changes
            </Button>

            {disabledDateTime.some(
              (day) => day.date === formatDate(selectedDate) && day.disabled
            ) ? (
              <Button variant="danger" onClick={handleDayToggle}>
                Enable Day
              </Button>
            ) : (
              <Button variant="primary" onClick={handleDayToggle}>
                Disable Day
              </Button>
            )}
          </div>

          <div className="switchButton">
            <p>
              Selected Date:{" "}
              <b>{moment(selectedDate).format("DD MMMM YYYY")}</b>
            </p>
            <BootstrapSwitchButton
              checked={disabledMonth.some(
                (item) =>
                  new Date(item.month).getFullYear() ==
                    new Date(selectedDate).getFullYear() &&
                  getMonthNumber(item.month) === getMonthNumber(selectedDate) &&
                  item.disabled
              )}
              onlabel="Enable Month"
              offlabel="Disable Month"
              width={150}
              onstyle="warning"
              offstyle="outline-warning"
              onChange={handleMonthToggle}
            />

            <BootstrapSwitchButton
              checked={disabledWeek.some(
                (item) =>
                  item.year &&
                  item.year == new Date(selectedDate).getFullYear() &&
                  item.week.includes(moment(selectedDate).week()) &&
                  "" +
                    moment(selectedDate).year() +
                    moment(selectedDate).format("ww") >=
                    "" +
                      moment(new Date()).year() +
                      moment(new Date()).format("ww")
              )}
              onlabel="Enable Week"
              offlabel="Disable Week"
              width={150}
              onstyle="info"
              offstyle="outline-info"
              onChange={handleWeekToggle}
            />
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
};

export default ScheduleManagement;
