import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
    return (
        <div className="nav--div">
            <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
            {/* <img src="/world.jpeg" alt="Picture of the world"/> */}
            <h4>my travel journal</h4>
        </div>
    )
}