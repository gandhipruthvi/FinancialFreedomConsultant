import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    const handleScroll = () => {
      toggleVisible();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <button
        className={`scrollToTopButton ${visible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="twi-arrow-to-top1"></i>
      </button>
    </>
  );
}

export default Layout;
