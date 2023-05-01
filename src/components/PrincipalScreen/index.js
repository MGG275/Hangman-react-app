import React from "react";
import ImgHangMan from "../../Assets/hangman-images.jpeg"
import { useNavigate } from "react-router-dom";
import "./index.css";

function PricipalScreen() {
  
  const navigate = useNavigate();

  return (
    <div className="pricipal-screen">
      <div className="buttons">
        <button onClick={ () => navigate('./singleplayer') }>Single Player</button>
        <button onClick={ () => navigate('./multiplayer') }>Multiplayer</button>
      </div>
      <div className="hangman-img">
				<img src={ImgHangMan} alt = ""/>
        <div className="handman-letters">
          <span>H</span>
          <span>A</span>
          <span>N</span>
          <span>G</span>
          <span>M</span>
          <span>A</span>
          <span>N</span>
        </div>
      </div>
    </div>
  );
}

export default PricipalScreen;
