import React from 'react';
import './Components.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-container">
                <h1 className="header-title">Welcome to Pet Heaven</h1>
            </div>
            <div className="info-container">
                <div className="info-card">
                    <h2 className="info-title">Adopt a Pet</h2>
                    <div className="info-icon-container">
                        <div className="info-icon adopt-icon"></div>
                    </div>
                    <p className="info-description">Find your new best friend and give them a forever home.</p>
                </div>
                <div className="info-card">
                    <h2 className="info-title">Surrender a Pet</h2>
                    <div className="info-icon-container">
                        <div className="info-icon surrender-icon"></div>
                    </div>
                    <p className="info-description">If you can no longer care for your pet, we can help find them a new loving home.</p>
                </div>
                <div className="info-card">
                    <h2 className="info-title">Volunteer</h2>
                    <div className="info-icon-container">
                        <div className="info-icon volunteer-icon"></div>
                    </div>
                    <p className="info-description">Help us care for our furry friends by volunteering your time and skills.</p>
                </div>
            </div>
            <div className="footer-container">
                <p className="footer-text">Pet Heaven &copy; 2023</p>
            </div>
        </div>
    );
};

export default Home;
