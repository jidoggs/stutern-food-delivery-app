import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ link, image, title }) {
  return (
    <li className="category__item">
      <Link to={`/resturants/${link}`} className="category__item-wrapper">
        <span
          className="category__item-image"
          style={{ backgroundImage: `url(${image})` }}
        ></span>
        <p className="title__elementry mt-75 darkGray">{title}</p>
      </Link>
    </li>
  );
}

export default CategoryItem;
