import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <a
        className="scrollToTopButton"
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <i className="twi-arrow-to-top1"></i>
      </a>
    </>
  );
}

export default Layout;