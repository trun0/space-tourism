import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from '../../assets/shared/logo.svg';
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";


function Navigation() {

    function handleHamburger() {
        document.getElementsByClassName("icon-hamburger")[0].classList.add("display-ham");
        document.getElementsByClassName("icon-close")[0].classList.add("display-close");
        document.getElementsByClassName("nav-box")[0].classList.add("display-nav-box");
    }
    function handleClose() {
        document.getElementsByClassName("icon-hamburger")[0].classList.remove("display-ham");
        document.getElementsByClassName("icon-close")[0].classList.remove("display-close");
        document.getElementsByClassName("nav-box")[0].classList.remove("display-nav-box");
    }

    return (
        <div className="navigation">
           <Link to="/"><img className="ninja-star" src={logo} alt="logo" /></Link>
            <hr className="rect"></hr>
            <nav className="nav-box">
                <Link to="/" className="nav-text nav-item"><strong><span>00</span></strong> HOME</Link>
                <Link to="/destination" className="nav-text nav-item"><strong><span>01</span></strong> DESTINATION</Link>
                <Link to="/crew" className="nav-text nav-item"><strong><span>02</span></strong> CREW</Link>
                <Link to="/technology" className="nav-text nav-item"><strong><span>03</span></strong> TECHNOLOGY</Link>
            </nav>
            <img className="icon-hamburger" src={hamburger} onClick={handleHamburger} alt="hamburger-icon" />
            <img className="icon-close" src={close} onClick={handleClose} alt="close-icon" />
        </div>
    );
}

export default Navigation;
