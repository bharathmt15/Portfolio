import React from "react";
import img from "../mylogo.jpg";

function Nav() {
    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="logo">Bharath</div>
                <div className="navbar-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </div>
            </nav>
            <div className="image-container">
                <img src={img} alt="Logo" className="responsive-image" />
            </div>
            <div className="text-container">
                <p className="about-text">
                    Hello, I am Bharath and I am a passionate web developer.
                </p>
            </div>
        </div>
    );
}

export default Nav;
