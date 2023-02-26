import React from 'react';
import './Components.css';

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About Pet Heaven</h2>
            <p className="about-intro">We are a charitable organization dedicated to caring for abandoned cats and dogs. Our goal is to provide a safe haven for these pets and to help them find loving homes through our adoption program.</p>

            <div className="about-features">
                <div className="about-feature">
                    <div className="about-feature-icon cats"></div>
                    <h3 className="about-feature-title">Cats</h3>
                    <p className="about-feature-description">View available cats for adoption.</p>
                </div>
                <div className="about-feature">
                    <div className="about-feature-icon dogs"></div>
                    <h3 className="about-feature-title">Dogs</h3>
                    <p className="about-feature-description">View available dogs for adoption.</p>
                </div>
                <div className="about-feature">
                    <div className="about-feature-icon adoption"></div>
                    <h3 className="about-feature-title">Adoption Form</h3>
                    <p className="about-feature-description">Fill out our adoption form and start the process of giving a new home to one of our pets today!</p>
                </div>
            </div>

            <div className="about-services">
                <h3 className="about-services-title">Our Services</h3>
                <ul className="about-services-list">
                    <li className="about-service">
                        <h4 className="about-service-title">Membership Registration</h4>
                        <p className="about-service-description">Become a member of Pet Heaven and receive the latest adoption and volunteer notifications.</p>
                    </li>
                    <li className="about-service">
                        <h4 className="about-service-title">Surrender Pet</h4>
                        <p className="about-service-description">Surrender your cat or dog if you are no longer able to care for them, and we will do our best to find them a new loving home.</p>
                    </li>
                    <li className="about-service">
                        <h4 className="about-service-title">Adoption Request</h4>
                        <p className="about-service-description">Submit an adoption request for a specific cat or dog you would like to adopt, and our adoption team will contact you to discuss the adoption process further.</p>
                    </li>
                </ul>
            </div>

            <p className="about-thankyou">Thank you for considering Pet Heaven for your adoption needs. We hope our website makes it easy for you to find the perfect furry companion!</p>
        </div>
    );
};

export default About;
