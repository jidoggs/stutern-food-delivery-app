import React from "react";
import { Link } from "react-router-dom";
import { capitilizeFirstLetter } from "../../helpers/helperFunctions";

function CategoryItem({ link, title }) {
  return (
    <li className={`category__item item__${title}`}>
      <Link
        to={
          title === "our-foods"
            ? "/resturants"
            : title === "best-foods"
            ? "/deals"
            : `/resturants/${link}`
        }
        className="category__item-wrapper"
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${title}`}></use>
        </svg>
        <p className="title__elementry mt-75 darkGray">
          {capitilizeFirstLetter(title)}
        </p>
      </Link>
    </li>
  );
}

export default CategoryItem;
