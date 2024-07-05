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
} from "firebase/firestore";
import Button from "react-bootstrap/Button";

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
  }, []);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };

  const handleDateChange = (date) => {
    if (date && date instanceof Date && date.getHours() != 8) {
      var index = disabledTime.indexOf(date.toString());
      if (index == -1) {
        setDisabledTime([...disabledTime, date.toString()]);
      } else {
        disabledTime.splice(index, 1);
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
    console.log(disabledTime);
    return disabledTime.some((date1) => date1 === time.toString())
      ? "disabledTime"
      : "";
  };

  const handleSave = async () => {
    try {
      const scheduleDocRef = collection(db, "scheduleManagement");
      await addDoc(scheduleDocRef, {
        times: disabledTime.map((time) => new Date(time)),
      });

      alert("Disabled times saved successfully!");
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

        <Button onClick={handleSave} type="submit" variant="primary">
          Save
        </Button>
      </div>
    </div>
  );
};

export default ScheduleManagement;
