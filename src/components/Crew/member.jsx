import React from "react";

function Member(props) {
    return (
        <div>
            <div className="member-details">
                <div className="heading5 crew-heading"><span>02 </span>MEET YOUR CREW</div>
                <hr className="mobile-hr"></hr>
                <div className="heading4 member-role">{props.role.toUpperCase()}</div>
                <div className="heading3 member-name">{props.memberName.toUpperCase()}</div>
                <div className="normal-text member-bio">{props.bio}</div>
            </div>
            <img className="member-image" src={props.memberImage} alt="CrewMember" />
        </div>
    );
}

export default Member;