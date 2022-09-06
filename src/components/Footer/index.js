import React from "react";
import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';
import twitter from '../../assets/images/twitter.png';
import './footer.scss'

const Footer = () => {
    return (
        <div className="inner">
            <div className="row justify-content-center">
                <div className="col-3">
                <p>Copyright <a href="#">@NimitPatel</a>.</p>
                </div>
                <div className="col-3">
                    <a href="https://github.com/Np23295" target='new'>
                    <img src={github} className="socialMediaImg" alt="Profile Img github" />
                    </a>
                    <a href="https://ca.linkedin.com/in/nimit23" target='new'>
                    <img src={linkedIn} className="socialMediaImg" alt="Profile img linkedIn" />
                    </a>
                    <a href="https://twitter.com/iamNimitPatel" target='new'>
                    <img src={twitter} className="socialMediaImg" alt="Profile img twitter" />
                    </a>
                </div> 
            </div>
        </div>
    );
}

export default Footer;