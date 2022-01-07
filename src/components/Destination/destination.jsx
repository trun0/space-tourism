import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./destination.css";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";
import data from "../../data.json";

function Destination() {

    const [destination, setDestination] = useState("MOON");
    const [destinationImage, setDestinationImage] = useState(moon);
    const [description, setDescription] = useState(data.destinations[0].description);
    const [distance, setDistance] = useState(data.destinations[0].distance);
    const [travel, setTravel] = useState(data.destinations[0].travel);

    setTimeout(() => {
        const ta = document.querySelectorAll(".nav-item-active");
        ta.forEach(ta => {
            ta.classList.remove("nav-item-active");
        });
        document.getElementsByClassName("nav-item")[1].classList.add("nav-item-active");
    }, 10);

    function handleDestination(e) {
        const dest = data.destinations.find(x => x.name === e);

        setDestination(dest.name.toUpperCase());
        setDescription(dest.description);
        setDistance(dest.distance);
        setTravel(dest.travel);

        const tags = document.querySelectorAll(".dest-link-item-active");
        tags.forEach(tag => {
            tag.classList.remove("dest-link-item-active");
        });
        switch (e) {
            case "Moon":
                setDestinationImage(moon);
                document.getElementsByClassName("dest-link-item")[0].classList.add("dest-link-item-active");
                break;
            case "Mars":
                setDestinationImage(mars);
                document.getElementsByClassName("dest-link-item")[1].classList.add("dest-link-item-active");
                break;
            case "Europa":
                setDestinationImage(europa);
                document.getElementsByClassName("dest-link-item")[2].classList.add("dest-link-item-active");
                break;
            case "Titan":
                setDestinationImage(titan);
                document.getElementsByClassName("dest-link-item")[3].classList.add("dest-link-item-active");
                break;
            default:
                break;
        }
    }

    return (
        <div className="destination">
            <div className="dest-left-part">
                <div className="heading5 destination-heading"><span>01 </span>PICK YOUR DESTINATION</div>
                <div><img className="dest-image" src={destinationImage} alt={"moon"} /></div>
            </div>
            <div className="destination-content">
                <div className="dest-link">
                    <Link to="" className="dest-link-item dest-link-item-active" onClick={() => { handleDestination("Moon"); }} >MOON</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Mars"); }} >MARS</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Europa"); }} >EUROPA</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Titan"); }} >TITAN</Link>
                </div>
                <div className="heading2 destination-name">{destination}</div>
                <div className="normal-text destination-description">{description}</div>
                <hr className="hrule"></hr>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="subheading2">AVG. DISTANCE</div>
                        <div className="subheading1">{distance}</div>
                    </div>
                    <div className="grid-item">
                        <div className="subheading2">EST. TRAVEL TIME</div>
                        <div className="subheading1">{travel}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;