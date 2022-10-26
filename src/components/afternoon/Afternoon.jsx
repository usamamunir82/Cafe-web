import React from "react";
import "./afternoon.css";
import afternoon from '../../assets/images/afternoon.png'

function Afternoon() {
  return (
    <div className="container">
      <div className="afternoonContainer">
        <div className="afternoonImg">
           
        <img src={afternoon} alt='afternoon' />
        <div className="afternoonBorder" >

        </div>
        </div>
        <div className="afternoonContent">
          <p className="p1">“Having an afternoon tea with best friend is all theraphy you need” - anonymous</p>
          <p className="p2">Imagine having a quality time with your family and friend in a comfortable and fully aesthetic place where you can taste various asian fusion food and a finest beans coffee.</p>
         <div className="afternoonButton"> <button>BOOK NOW</button></div>
        </div>
      </div>
    </div>
  );
}

export default Afternoon;
