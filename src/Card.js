import React from "react";
import Star from './images/star.png';
import Image1 from './images/katie-zaferes.png';

export default function Card(){
    return(
        <div className="card">
            <img src={Image1} className="card-image-1" alt="" />
            <div className="card-stats">
            <img src={Star} className="card-star" alt="" />
            <span>5.0</span>
            <span className="grey">(6) • </span>
            <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span> / person</p>
            
        </div>

        
    )
}