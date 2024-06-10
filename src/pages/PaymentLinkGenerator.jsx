import "../Styles/PaymentLinkGenerator.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const PaymentLinkGenerator = () => {
  const [validated, setValidated] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.payment_amount.value);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const encryptedAmount = CryptoJS.AES.encrypt(
        form.payment_amount.value,
        import.meta.env.VITE_PAYMENT_SECRET_KEY
      ).toString();
      setPaymentLink(
        window.location.origin +
          "/payment?amount=" +
          encodeURIComponent(encryptedAmount)
      );

      console.log(form);
      emailjs
        .sendForm("service_aphuyl9", "template_1bgmuil", form, {
          publicKey: "fpCqaLGlOJgGZkKkq",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setValidated(false);
            toast.success("Email successfully sent!", {
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
            console.log("FAILED...", error);
            toast.error("Failed to send an email!", {
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
    <div className="paymentLinkGenerator">
      <Form
        className="linkGeneratorForm"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group className="mb-3" controlId="formClientEmail">
          <Form.Label>Client Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="client_email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaymentAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter Payment Amount"
            name="payment_amount"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid amount
          </Form.Control.Feedback>
        </Form.Group>

        <div className="row justify-content-around mb-3">
          <Button type="submit" variant="primary">
            Generate Link
          </Button>
          <Button type="reset" variant="danger">
            Reset
          </Button>
        </div>

        <Form.Group className="mb-3" controlId="formGeneratedLink">
          <Form.Label>Generated Link</Form.Label>
          <Form.Control
            disabled
            type="input"
            name="generated_link"
            value={paymentLink}
          />
        </Form.Group>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default PaymentLinkGenerator;
