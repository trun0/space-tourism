import React from "react";
import "./crew.css";
import data from "../../data.json";
import member1 from "../../assets/crew/image-douglas-hurley.png";
import member2 from "../../assets/crew/image-mark-shuttleworth.png";
import member3 from "../../assets/crew/image-victor-glover.png";
import member4 from "../../assets/crew/image-anousheh-ansari.png";

import Member from "./member";


function Crew() {

    setTimeout(() => {
        const ta = document.querySelectorAll(".nav-item-active");
        ta.forEach(ta => {
            ta.classList.remove("nav-item-active");
        });
        document.getElementsByClassName("nav-item")[2].classList.add("nav-item-active");
    }, 10);

    return (
        <div className="crew">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators crew-nav">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active crew-nav-item" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="crew-nav-item" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="crew-nav-item" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="crew-nav-item" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Member role={data.crew[0].role} memberName={data.crew[0].name} bio={data.crew[0].bio} memberImage={member1} />
                    </div>
                    <div className="carousel-item">
                        <Member role={data.crew[1].role} memberName={data.crew[1].name} bio={data.crew[1].bio} memberImage={member2} />
                    </div>
                    <div className="carousel-item">
                        <Member role={data.crew[2].role} memberName={data.crew[2].name} bio={data.crew[2].bio} memberImage={member3} />
                    </div>
                    <div className="carousel-item">
                        <Member role={data.crew[2].role} memberName={data.crew[3].name} bio={data.crew[3].bio} memberImage={member4} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Crew;