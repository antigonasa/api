import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Images from "../../components/pages/About/Images";
import Users from "../../components/pages/About/Users";
import UsersWithAxios from "../../components/pages/About/UsersWithAxios";
import Navbar2 from "../../components/shared/Navbar2/Navbar2";
import AboutMainComponent from "../../components/pages/About/AboutMainComponent";
import Footer from '../../components/shared/Footer/Footer';
import Inline2 from "../../components/pages/About/Inline2";
import Inputs from "../../components/pages/About/Inputs";

const About = () => {
  return (
    <div className="page-container about-page">
      {/* <Navbar styles='white-bg-nav' /> */}
      <Navbar2 />
      <Users />
      <Inputs />
      <AboutMainComponent />
      <UsersWithAxios />
      <Inline2 />
      <Images />
      <Footer />
    </div>
  );
};

export default About;
