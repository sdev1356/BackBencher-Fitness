import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram,FaSnapchat} from 'react-icons/fa';

const Footer=()=>{
    const currentYear=new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading"> Join Us Now</strong>
                <div className="footer-icons">
                    <FaFacebook className="footer-icon"/>
                    <FaInstagram className="footer-icon"/>
                    <FaSnapchat className="footer-icon"/>
                </div>
                <div className="footer-sub location">
                    <strong className="footer-subheading">Location</strong>
                    <strong className="footer-desc">216,Main Road,Panchkula,Sector 15</strong>
                    <strong className="footer-desc">Monday To Saturday(5AM to 10PM)</strong>
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Location</strong>
                    <span className="footer-desc">
                        216 Main Road,Panchkula,Sector15<br/>
                        Monday to Saturday(5AM to 10PM)
                    </span>
                </div>

                <div className="wrapper">
                    <div className="footer-sub">
                        <strong className="footer-subheading">Community</strong>
                        <small>Health Awareness</small>
                        <small>Sunday Yoga Camps</small>
                        <small>Blood Donation Camps</small>
                    </div>
                    <div className="footer-sub">
                        <strong className="footer-subheading">Services</strong>
                        <small>Personal Trainer</small>
                        <small>Nutritional Guidances</small>
                        <small>Weight Loss Program</small>
                    </div>

                    <div className="footer-sub">
                        <strong className="footer-subheading">Terms And Conditions</strong>
                        <strong className="footer-subheading">Privacy Policy</strong>
                    </div>
                </div>
                <span className="footer-subheading footer-copy">&copy;&nbsp;Backbencher Fitness&nbsp;{currentYear}</span>

            </div>
        </footer>
    )
}
export default Footer