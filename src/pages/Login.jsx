import { useState } from "react";
import "../styles/Login.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(auth.currentUser);
  if (auth.currentUser) {
    navigate(location.state?.from?.pathname || "/dashboard", {
      replace: true,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          form.admin_email.value,
          form.admin_password.value
        );
        console.log(res.user);
        navigate(location.state?.from?.pathname || "/dashboard", {
          replace: true,
        });
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="container">
        <div className="d-flex-col justify-content-center">
          <h3>Login</h3>
          <Form
            className=""
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="admin_email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="admin_password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Password
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
