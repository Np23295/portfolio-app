import React from "react";
import profile from '../../assets/images/profile.jpeg';
import './about.scss'

const AboutMe = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <img src={profile} className="profileImg" alt="Profile" />
                </div>
                <div className="col-6">
                    <h5 className="bio">
                    Experienced Full Stack Developer with a demonstrated history of working in the software industry. Skilled in Designing, Development, Testing and Deployment of Mobile and Web Apps. Strong media and communication professional with a Bachelors of Engineering focused in I.T.
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;