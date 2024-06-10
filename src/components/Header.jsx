import { useLayoutEffect, useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import "../Styles/Header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const ref = useRef();
  let check = true;
  const sticky = useStickyHeader(50);
  const headerClasses =
    sticky && check ? "sticky fixedHeader animated slideInDown" : "";

  const location = useLocation().pathname == "/" ? "header" : "header relative";

  function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);

    const handleScroll = () => {
      setStick(window.scrollY > offset);
    };

    useLayoutEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return stick;
  }

  const [isActive, setActive] = useState(false);
  const searchBarRef = useRef(null);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const toggleSearchBtnClass = () => {
    setActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSideMenuBar = () => {
    setSideMenuActive(!sideMenuActive);
  };

  return (
    <div className={location}>
      <header ref={ref} className={headerClasses}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <nav className="mainMenu">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={
                          isActive ? "current-menu-item anchor" : "anchor"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={
                          isActive ? "current-menu-item anchor" : "anchor"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        className={
                          isActive ? "current-menu-item anchor" : "anchor"
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        className={
                          isActive ? "current-menu-item anchor" : "anchor"
                        }
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/appointment"
                        className={
                          isActive ? "current-menu-item anchor" : "anchor"
                        }
                      >
                        Appointment
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="accessNav">
                  <a className="menuToggler" onClick={toggleSideMenuBar}>
                    <i className="twi-bars1"></i>
                  </a>
                  <NavLink
                    to="/contact"
                    className={
                      isActive
                        ? "current-menu-item anchor qu_btn"
                        : "anchor qu_btn"
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
                <div className="navleft">
                  <div className="icon_box_04">
                    <div className="ib_box">
                      <i className="twi-comments-alt-dollar"></i>
                    </div>
                    <p>Have any Questions?</p>
                    <h3>
                      <a
                        className="email"
                        href="mailto:info@financialfreedomconsultant.com"
                      >
                        info@financialfreedomconsultant.com
                      </a>
                    </h3>
                  </div>
                  <div
                    ref={searchBarRef}
                    className={isActive ? "searchBtn active" : "searchBtn"}
                  >
                    <a onClick={toggleSearchBtnClass}>
                      <i className="twi-search2"></i>
                    </a>
                    <div className="searchBar">
                      <form className="d-flex" method="post" action="#">
                        <input
                          type="search"
                          name="s"
                          placeholder="Search Here..."
                        />
                        <button type="submit">
                          <i className="twi-search2"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className={sideMenuActive ? "sidebarMenu active" : "sidebarMenu"}
      >
        <div className="sidebarMenuOverlay"></div>
        <div className="SMArea">
          <div className="SMAHeader">
            <h3>
              <i className="twi-bars1"></i> Menu
            </h3>
            <a className="SMACloser" onClick={toggleSideMenuBar}>
              <i className="twi-times2"></i>
            </a>
          </div>
          <div className="SMABody">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appointment"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  Book an Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={isActive ? "current-menu-item anchor" : "anchor"}
                  onClick={toggleSideMenuBar}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
