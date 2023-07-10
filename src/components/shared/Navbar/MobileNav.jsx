import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const MobileNav = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  
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
  
  return (
    <div className="mobile-nav">
      <div className={`toolbar ${isScrolled ? 'nav-scroll' : ''}`}>
        <Link to="/" className="logo">
          Logo
        </Link>
        <button onClick={props.showSidebar}>
          <AiOutlineMenu />
        </button>
      </div>

      {props.sidebarInMobile === true ? (
        <div className="sidebar">
          <div className="logo-container">
            <Link to="/" className="sidebar-logo">
              Logo
            </Link>
            <button onClick={props.closeSidebar}>
              <CgClose />
            </button>
          </div>
          <div className="mobile-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="btn-container">
            <Link to="/login" className="shared-button">
              Log In
            </Link>
          </div>
        </div>
      ) : null}

      {props.sidebarInMobile === true ? (
        <div className="backdrop" onClick={props.closeSidebar}></div>
      ) : null}
    </div>
  );
};

export default MobileNav;
