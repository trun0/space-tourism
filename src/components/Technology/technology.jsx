import React, { useState } from "react";
import "./technology.css";
import data from "../../data.json";
import tech1portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import tech2portrait from "../../assets/technology/image-spaceport-portrait.jpg";
import tech3portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import tech1landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import tech2landscape from "../../assets/technology/image-spaceport-landscape.jpg";
import tech3landscape from "../../assets/technology/image-space-capsule-landscape.jpg";


function Technology() {

    const [tech, setTech] = useState(data.technology[0].name);
    const [techLandscapeImage, setTechLandscapeImage] = useState(tech1landscape);
    const [techPortraitImage, setTechPortraitImage] = useState(tech1portrait);
    const [description, setDescription] = useState(data.technology[0].description);

    setTimeout(() => {
        const ta = document.querySelectorAll(".nav-item-active");
        ta.forEach(ta => {
            ta.classList.remove("nav-item-active");
        });
        document.getElementsByClassName("nav-item")[3].classList.add("nav-item-active");
    }, 10);

    function handleTechnology(e) {
        const dest = data.technology.find(x => x.name === e);

        setDescription(dest.description);
        setTech(dest.name);

        const tags = document.querySelectorAll(".technology-nav-item-active");
        tags.forEach(tag => {
            tag.classList.remove("technology-nav-item-active");
        });
        switch (e) {
            case "Launch vehicle":
                setTechPortraitImage(tech1portrait);
                setTechLandscapeImage(tech1landscape);
                document.getElementsByClassName("technology-nav-item")[0].classList.add("technology-nav-item-active");
                break;
            case "Spaceport":
                setTechPortraitImage(tech2portrait);
                setTechLandscapeImage(tech2landscape);
                document.getElementsByClassName("technology-nav-item")[1].classList.add("technology-nav-item-active");
                break;
            case "Space capsule":
                setTechPortraitImage(tech3portrait);
                setTechLandscapeImage(tech3landscape);
                document.getElementsByClassName("technology-nav-item")[2].classList.add("technology-nav-item-active");
                break;
            default:
                break;
        }
    }


    return (
        <div className="technology">
            <div className="technology-content">
                <div className="heading5 technology-heading"><span>03 </span>SPACE LAUNCH 101</div>
                <div className="technology-details">
                    <div className="technology-nav">
                        <div className="technology-nav-item technology-nav-item-active" onClick={() => { handleTechnology("Launch vehicle") }}><span className="heading4 tech-count">1</span></div>
                        <div className="technology-nav-item" onClick={() => { handleTechnology("Spaceport") }}><span className="heading4 tech-count">2</span></div>
                        <div className="technology-nav-item" onClick={() => { handleTechnology("Space capsule") }}><span className="heading4 tech-count">3</span></div>
                    </div>
                    <div>
                        <div className="normal-text term">THE TERMINOLOGY...</div>
                        <div className="heading3 tech-name">{tech.toUpperCase()}</div>
                        <div className="normal-text tech-info">{description}</div>
                    </div>
                </div>
            </div>
            <img className="tech-image portrait" src={techPortraitImage} alt="technologyTech" />
            <img className="tech-image landscape" src={techLandscapeImage} alt="technologyTech" />
        </div>
    );
}

export default Technology;