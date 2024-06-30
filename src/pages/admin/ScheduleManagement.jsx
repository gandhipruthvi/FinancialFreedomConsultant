import DatePicker from "react-datepicker";
import "../../styles/ScheduleManagement.scss";
import { useState } from "react";
import getDay from "date-fns/getDay";

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 7;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
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
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Date"
          inline
        />
        {selectedDate && (
          <>
            <DatePicker
              selected={selectedTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select a time"
              inline
              minTime={new Date(selectedDate).setHours(9, 0, 0, 0)}
              maxTime={new Date(selectedDate).setHours(17, 0, 0, 0)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleManagement;
