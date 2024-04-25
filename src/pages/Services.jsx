import "../Styles/Services.scss";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Services</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
