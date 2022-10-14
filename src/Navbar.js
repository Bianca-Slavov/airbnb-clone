import React from "react";
import airbnbLogo from './images/airbnb-logo.png';

export default function Navbar(){
    return(
        <div className="navbar">
            <nav>
            <img src={airbnbLogo} className="nav-logo" alt="" />
            </nav>
        </div>
    )
}