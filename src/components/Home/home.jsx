import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {

    setTimeout(() => {
        const ta = document.querySelectorAll(".nav-item-active");
        ta.forEach(ta => {
            ta.classList.remove("nav-item-active");
        });
        document.getElementsByClassName("nav-item")[0].classList.add("nav-item-active");
    }, 10);

    return (
        <div className="home">
            <div className="home-content">
                <div className="intro">
                    <div className="heading5 info">SO, YOU WANT TO TRAVEL TO</div>
                    <div className="heading1 home-name">SPACE</div>
                    <div className="normal-text home-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                </div>
                <Link to="/destination" className="explore-link">
                    <div className="explore"><span className="explore-text">EXPLORE</span></div>
                </Link>
            </div>
        </div>
    );
}

export default Home;