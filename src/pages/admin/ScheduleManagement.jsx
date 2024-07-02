import DatePicker from "react-datepicker";
import "../../styles/ScheduleManagement.scss";
import { useState } from "react";
import getDay from "date-fns/getDay";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };

  const handleDateChange = (date) => {
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
        />
      </div>
    </div>
  );
};

export default ScheduleManagement;
