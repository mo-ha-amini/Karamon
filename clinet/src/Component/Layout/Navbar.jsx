import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import Logo from '../../assets/logo/Logo.jpeg'
import expandBotton from '../../assets/menu-button.svg' 

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg" style={{padding: '0',}}>
      <NavLink className="navbar-brand navbar-logo" to="/">
        <div className="tw-flex tw-flex-row tw-items-center">
        <img src={Logo} alt="" style={{width: '53px', marginRight: '15px'} }/>
        <span>Karamon</span>
        </div>

      </NavLink>

      <button
        className="navbar-toggler tw-text-white"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src={expandBotton} alt="" className="tw-bg-white tw-rounded-full"/>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
             Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/architecture" exact>
              Architecture
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/interiordesign" exact>
              Interior Design
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/handicraft" exact>
              Handicraft
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog" exact>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About" exact>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
