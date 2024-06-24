import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Academy from "./pages/Academy.jsx";
import Contact from "./pages/Contact.jsx";
import Payments from "./pages/Payments.jsx";
import PaymentLinkGenerator from "./pages/PaymentLinkGenerator.jsx";
import Appointment from "./pages/Appointment.jsx";
import NotFound from "./pages/NotFound.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AppoinmentManagement from "./pages/admin/AppoinmentManagement.jsx";

import PrivateRoutesLayout from "./utils/PrivateRoutesLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="academy" element={<Academy />} />
      <Route path="course/:id" element={<CourseDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="payment" element={<Payments />} />
      <Route path="paymentLinkGenerator" element={<PaymentLinkGenerator />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      {/* private routes */}
      <Route element={<PrivateRoutesLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/appoinmentManagement"
          element={<AppoinmentManagement />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
