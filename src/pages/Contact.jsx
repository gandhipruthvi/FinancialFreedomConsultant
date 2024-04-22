import "../Styles/Contact.scss";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Contact</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Contact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
