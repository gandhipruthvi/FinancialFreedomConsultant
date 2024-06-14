import React from "react";
import image from "../assets/oops.svg";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 80, marginBottom: 100 }}>
      <img src={image} alt="image" width={250} height={250} />

      <h1>Oops!</h1>
      <h2 style={{ marginTop: 20 }}>
        Sorry, the page you are looking for does not exist.
      </h2>
    </div>
  );
}
