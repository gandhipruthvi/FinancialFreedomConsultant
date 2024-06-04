import "../Styles/Payments.scss";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payments = () => {
  const [amount, setAmount] = useState(null);
  const [isCorrect, setCorrect] = useState(false);

  const checkAmount = () => {
    if (amount > 0 && amount < 10000) {
      setCorrect(true);
    }
  };

  const editAmount = () => {
    setCorrect(false);
  };

  const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_LIVE_ID,
    currency: "USD",
    intent: "capture",
  };

  const styles = {
    shape: "pill",
    layout: "vertical",
  };

  return (
    <div className="payments">
      <div className="amountForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            disabled={isCorrect ? true : false}
            value={amount}
          />
        </Form.Group>

        <div className="row justify-content-around">
          <Button variant="primary" onClick={checkAmount}>
            Pay Now
          </Button>
          <Button variant="danger" onClick={editAmount}>
            Edit
          </Button>
        </div>
      </div>

      <ToastContainer />

      {isCorrect ? (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={styles}
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                ],
              })
            }
            onApprove={(data, actions) =>
              actions.order.capture().then(() => {
                toast.success("Thank you for the payment!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              })
            }
            onCancel={() => {
              toast.warning("Payment Cancelled!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
            onError={(err) => {
              console.log("PayPal Checkout onError", err);
              toast.error("Payment Error", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
          />
        </PayPalScriptProvider>
      ) : null}
    </div>
  );
};

export default Payments;
