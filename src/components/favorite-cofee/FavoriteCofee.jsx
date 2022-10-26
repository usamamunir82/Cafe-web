import React from "react";
import "./favoritecofee.css";
import cofee from "../../assets/images/cofee.png";

function FavoriteCofee() {
  return (
    <div className="container">
      <div className="cofeeContainer">
        <div className="cofeeContent">
          <p className="fCofee">Choose your Favorite Coffee</p>
          <p className="cofeePara">
            Our current beans line up for filter coffee. We will add new
            selection for the guest beans. Keep you guys updated on this page.
          </p>
          <div className="cofeeButon">
          <button>LEARN MORE</button>
          </div>
        </div>
        <div className="cofeeImgBox">
            
         
            
                <img  className="coffeImg" src={cofee} alt="Cofee" />
                <div className="coffeBorder"></div>
            </div>
        
        
      </div>
      <div className="Asian">
        <p>Asian</p>
      </div>
      
    </div>
  );
}

export default FavoriteCofee;
