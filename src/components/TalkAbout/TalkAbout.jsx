import React from "react";
import "./talkabout.css";
import talk1 from "../../assets/images/talk1.png";
import talk2 from "../../assets/images/talk2.png";
import talk3 from "../../assets/images/talk3.png";

function TalkAbout() {
  return (
    <div className="container">
      <div className="talkContainer">
        <div className="talkContent">
          <p>
            A progression of rare and beautiful ingrediens where texture,
            flavour, and harmony is paramount.
          </p>
          <div className="talkButon">
          <button>GET MENU</button></div>
          <div className="talkImages">
           
            <span className="talk1">
            <img src={talk1} alt="talk1" />
            </span>
            <div className="talk2">
            <img src={talk2} alt="talk2" />
            </div>
            <span className="talk3"> <img src={talk3} alt="talk3" /></span>
          </div>
        </div>
        <div className="talkRight">
            <div className="talkRightHead">
          <p>—Let’s talk about our Signature  Menu</p></div>
        </div>
      </div>
    </div>
  );
}

export default TalkAbout;
