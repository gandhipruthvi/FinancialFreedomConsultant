import "../styles/AppointmentForm.scss";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countries from "../assets/countries.json";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import { db } from "../../firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [validated, setValidated] = useState(false);

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

  const getBookedTimesForDate = (date) => {
    let timesToExclude = [];
    bookedSlots.forEach((slot) => {
      if (slot.toDateString() === date.toDateString()) {
        timesToExclude.push(slot);
      }
    });
    return timesToExclude;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date && date instanceof Date && date.getHours() !== 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const SelectDate = () => {
    return (
      <DatePicker
        selected={selectedDate}
        className={
          selectedDate == null
            ? "dateTimeInvalid dateTimeSelector"
            : "dateTimeSelector"
        }
        onChange={handleDateChange}
        onClickOutside={() => setIsOpen(false)}
        onSelect={() => setIsOpen(true)}
        open={isOpen}
        showTimeSelect
        filterDate={isWeekday}
        filterTime={filterPassedTime}
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Time"
        minTime={setHours(setMinutes(new Date(), 59), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date & Time"
        name="date_time"
        excludeTimes={getBookedTimesForDate(
          selectedDate ? selectedDate : new Date()
        )}
        onFocus={() => setIsOpen(true)}
      />
    );
  };

  let countriesOption =
    countries.length > 0 &&
    countries.map((country) => {
      return (
        <option value={country.name} key={country.name}>
          {country.name}
        </option>
      );
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedDate == null) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();

      const appointment = {
        clientName: form.client_name.value,
        clientEmail: form.client_email.value,
        service: form.service.value,
        date: selectedDate,
        country: form.country.value,
        contactNumber: form.contact_number.value,
        info: form.info.value,
      };

      await addDoc(collection(db, "appointments"), appointment);
      setBookedSlots([...bookedSlots, new Date(appointment.date)]);

      // sending appointment information to the server
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_APPOINTMENT_SERVICE_KEY,
          import.meta.env.VITE_EMAILJS_APPOINTMENT_SERVER_TEMPLATE,
          form,
          {
            publicKey: import.meta.env.VITE_EMAILJS_APPOINTMENT_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            // sending appointment email to the client
            emailjs
              .sendForm(
                import.meta.env.VITE_EMAILJS_APPOINTMENT_SERVICE_KEY,
                import.meta.env.VITE_EMAILJS_APPOINTMENT_CLIENT_TEMPLATE,
                form,
                {
                  publicKey: import.meta.env
                    .VITE_EMAILJS_APPOINTMENT_PUBLIC_KEY,
                }
              )
              .then(
                () => {
                  console.log("SUCCESS!");
                  form.reset();
                  setValidated(false);
                  toast.success("Form successfully submitted", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                },
                (error) => {
                  console.log("FAILED...", error.text);
                  toast.error("Unable to send the confirmation email!", {
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
              );
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Unable to submit the form", {
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
        );
    }
  };

  return (
    <div className="appointmentFormComponent">
      <ToastContainer />
      {/* <div className="loader-container">
        <span className="loader"></span>
      </div> */}
      <Form
        className="row"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group className="input-field col-md-6">
          <i className="twi-user2"></i>
          <Form.Control
            required
            type="text"
            placeholder="Enter Your Name"
            name="client_name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid Name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field col-md-6">
          <i className="twi-envelope2"></i>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            name="client_email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid Email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field col-md-12">
          <i className="twi-cog"></i>
          <Form.Select required name="service">
            <option value="">Choose services</option>
            <option value="Wealth path advisory">Wealth path advisory</option>
            <option value="Portfolio Management">Portfolio Management</option>
            <option value="Fin Market Academy">Fin Market Academy</option>
            <option value="Financial Advisory">Financial Advisory</option>
            <option value="Career Counseling">Career Counseling</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a Service
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field  col-md-12">
          <i className="twi-calendar2 dateTime"></i>
          <SelectDate></SelectDate>
          <Form.Control.Feedback
            type="invalid"
            className={selectedDate == null ? "active" : ""}
          >
            Please select a Date and Time
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field col-md-6">
          <i className="icons-worldwide"></i>
          <Form.Select required name="country">
            <option value="">Choose country</option>
            {countriesOption}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a Country
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field col-md-6">
          <i className="icons-telephone"></i>
          <Form.Control
            required
            type="number"
            placeholder="Contact Number"
            min="100000000"
            max="9999999999"
            name="contact_number"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a Contact Number
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-field col-md-12">
          <i className="twi-comment-lines2"></i>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Describe Your Info"
            name="info"
          />
        </Form.Group>

        <div className="input-field col-md-12">
          <button type="submit" className="qu_btn">
            Book Appointment
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
