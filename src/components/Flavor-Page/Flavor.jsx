import React from "react";
import "./flavor.css";
import flavor from "../../assets/images/flavor.png";

function Flavor() {
  return (
    <div className="container">
      <div className="flavorContent">
        <div className="flavorRbox">

        <div className="flavorImgBox">
        <div className="flavorImg" >
          <img className="Fimg"  src={flavor} alt="Flavor" /></div>
          </div>
        </div>
        <div className="flavorData">
          <p className="flavor-p1">Modern Asian & Specialty Coffee </p>
          <p className="flavor-p2">We welcome you to Savor the Flavor of The World</p>
          <p className="flavor-p3">
            Get ready to taste our take on Modern Asian menu. Indulge your
            tastebud with the burst of flavour.
          </p>
        </div>
      </div>
      
      <div className="pride">
 
        <p>Pride</p>
       

      </div>
    </div>
  );
}

export default Flavor;
