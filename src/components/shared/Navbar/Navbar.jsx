import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import MobileNav from "./MobileNav";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  useEffect(
    () => {
      const handleScroll = () => {
        const scrollHeight = window.pageYOffset;
        setIsScrolled(scrollHeight < 25 ? false : true);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []
  )

  console.log('styles:', props.styles)

  return (
    <nav className={`${props.styles} ${isScrolled ? 'nav-scroll' : ''}`}>
      <Link to="/" className="logo nav-logo">
        Logo
      </Link>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="nav-button">
        <Link to="/login" className="shared-button">
          Log In
        </Link>
      </div>

      <MobileNav
        sidebarInMobile={sidebar}
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
      />
    </nav>
  );
};

export default Navbar;
