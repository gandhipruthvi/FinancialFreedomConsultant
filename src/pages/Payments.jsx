import "../Styles/Payments.scss";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import Form from "react-bootstrap/Form";

const Payments = () => {
  const location = useLocation();

  const myParam = new URLSearchParams(location.search).get("amount");
  const decryptedAmount = CryptoJS.AES.decrypt(
    myParam,
    import.meta.env.VITE_PAYMENT_SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);

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
      <ToastContainer />

      <Form.Group className="mb-3">
        <Form.Label>Payment Amount</Form.Label>
        <Form.Control disabled name="payment_amount" value={decryptedAmount} />
      </Form.Group>

      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={styles}
          createOrder={(data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: decryptedAmount,
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
    </div>
  );
};

export default Payments;
