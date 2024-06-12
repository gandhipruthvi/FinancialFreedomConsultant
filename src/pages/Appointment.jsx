import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import "../Styles/Appointment.scss";

export default function Appointment() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="d-flex-col justify-content-center">
          <h3>Make an Appointment</h3>
          <AppointmentForm />
          <br />
          <p className="note-section">
            Note: The displayed time here corresponds to the UAE time zone.
          </p>
        </div>
      </div>
    </div>
  );
}
