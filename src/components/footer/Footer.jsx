import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import "./footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footerContainer">
        <div className="footerContents">
          <div className="footerhead">
        
            <h2>Some of Our Happy Customer</h2>
            <div className="footerL">
            <div className="footerLine">
         
            </div>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerCardA">
                <div className="fLeft">
                <  FaQuoteLeft className="ads"/>
                </div>
              <p>One of the best place to visit and hang out. Good service and lot of spots to take a photo</p>
              <p>— Quinta Adelia</p>
             <div className="fRight"> <FaQuoteRight className="ads"/></div>
            </div>
            <div className="footerCardA">
               <div className="fLeft"> <FaQuoteLeft className="ads"/></div>
              <p>Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price</p>
              <p>— Natasya</p>
             <div className="fRight"><FaQuoteRight className="ads"/></div>
            </div>
            <div className="footerCardA">
                <div className="fLeft"><FaQuoteLeft className="ads"/></div>
              <p>This place where you can got a good atmosphere and good food, the owner have good taste high enough</p>
              <p>— Yosina Ribkah Kalalo</p>
             <div className="fRight"> <FaQuoteRight className="ads"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
