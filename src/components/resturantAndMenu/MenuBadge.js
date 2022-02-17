import React from "react";
import { Link, useLocation } from "react-router-dom";

function MenuBadge({ title }) {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        className="badge"
        to={
          (title === "best-foods" && pathname === "/deals") ||
          (title === "our-foods" && pathname === "/resturants") ||
          `/resturants/${title}` === pathname
            ? ""
            : title === "best-foods" && pathname !== "/deals"
            ? "/deals"
            : title === "our-foods" && pathname !== "/resturants"
            ? "/resturants"
            : `/resturants/${title}`
        }
      >
        <svg className=" badge__image icon" aria-hidden="true">
          <use xlinkHref={`#icon-${title}`}></use>
        </svg>
        <span className="badge__text title__secondary--sub title darkGray">
          {title === "best-foods" ? "deals" : title}
        </span>
      </Link>
    </li>
  );
}

export default MenuBadge;
