import { useLayoutEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import "../Styles/Header.scss";
import { NavLink, useLocation } from "react-router-dom";

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

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={location}>
      <header ref={ref} className={headerClasses}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
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
                    <li className="menu-item-has-children">
                      <a href="">Blogs</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="">Blog List Views</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog2.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog1.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="blog3.html">Without Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="">Blog Grid Views</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog5.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog4.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="blog6.html">Without Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="single-blog.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="">pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="">Services</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="service1.html">Service 01</a>
                            </li>
                            <li>
                              <a href="service2.html">Service 02</a>
                            </li>
                            <li>
                              <a href="single-service.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="">Portfolios</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="portfolio1.html">Portfolio 01</a>
                            </li>
                            <li>
                              <a href="portfolio2.html">Portfolio 02</a>
                            </li>
                            <li>
                              <a href="single-folio.html">Portfolio Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="team.html">Team Page</a>
                        </li>
                        <li>
                          <a href="company.html">Company History</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="accessNav">
                  <a
                    href
                    onClick={(e) => e.preventDefault()}
                    className="menuToggler"
                  >
                    <i className="twi-bars1"></i>
                  </a>
                  <a href="contact.html" className="qu_btn">
                    Contact Us
                  </a>
                </div>
                <div className="navleft">
                  <div className="icon_box_04">
                    <div className="ib_box">
                      <i className="twi-comments-alt-dollar"></i>
                    </div>
                    <p>Have any Questions?</p>
                    <h3>
                      <a>Email Address</a>
                    </h3>
                  </div>
                  <div
                    className={isActive ? "searchBtn active" : "searchBtn"}
                    onClick={toggleClass}
                  >
                    <a href onClick={(e) => e.preventDefault()}>
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

      {/* <section className="sidebarMenu">
        <div className="sidebarMenuOverlay"></div>
        <div className="SMArea">
          <div className="SMAHeader">
            <h3>
              <i className="twi-bars1"></i> Menu
            </h3>
            <a href="" className="SMACloser">
              <i className="twi-times2"></i>
            </a>
          </div>
          <div className="SMABody">
            <ul>
              <li className="menu-item-has-children current-menu-item">
                <a href="">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home One</a>
                  </li>
                  <li>
                    <a href="index2.html">Home Two</a>
                  </li>
                  <li>
                    <a href="index3.html">Home Three</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="">About</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about1.html">About 01</a>
                  </li>
                  <li>
                    <a href="about2.html">About 02</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="">blogs</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="">Blog List Views</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog2.html">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog1.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog3.html">Without Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="">Blog Grid Views</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog5.html">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog4.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog6.html">Without Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="single-blog.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="">pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="service1.html">Service 01</a>
                      </li>
                      <li>
                        <a href="service2.html">Service 02</a>
                      </li>
                      <li>
                        <a href="single-service.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="">Portfolios</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="portfolio1.html">Portfolio 01</a>
                      </li>
                      <li>
                        <a href="portfolio2.html">Portfolio 02</a>
                      </li>
                      <li>
                        <a href="single-folio.html">Portfolio Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="team.html">Team Page</a>
                  </li>
                  <li>
                    <a href="company.html">Company History</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
