import React from "react";
import { Link } from "react-router-dom";

function HeroCard({ image, type, discount, name, color }) {
  return (
    <div className="hero__card">
      <Link to={"/deals"} className={`hero__card--wrapper ${color && "pinkyBg"}`}>
        <span
          className="hero__card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></span>
        <div className="hero__card-text">
          <h5 className="title__primary">{type}</h5>
          <h2
            className={`title__main mb2-25   ${color? "pinkyTxt":"regHeadlineTxt"} `}
          >{`${discount}% OFF`}</h2>
          <p className="text__level1 text naturalGray">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default HeroCard;
