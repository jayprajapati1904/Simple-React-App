import React from "react";

function Cards(props) {
  return (
    <>
    <div className="cards">
      <div className="card ">
        <img src={props.imgsrc} alt="myPic" className="card_img"></img>
        <div className="card_info">
          <span className="card_category">{props.tital} </span>
          <h3 className="card_title">{props.tital2}</h3>
          <a href={props.button} target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>  
      </div>
    </>
  );
}

export default Cards;
