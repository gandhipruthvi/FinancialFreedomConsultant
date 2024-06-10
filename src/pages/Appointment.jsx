import React from "react";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointment() {
  return (
    <div className="container-sm w-50">
      <div className="d-flex-col justify-content-center">
        <h3 className="m-5">Make an Appointment</h3>
        <AppointmentForm />
        <br />
        <p className="note-section">
          Note: The displayed time here corresponds to the UAE time zone.
        </p>
      </div>
    </div>
  );
}
