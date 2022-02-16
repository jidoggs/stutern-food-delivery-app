import React from "react";

function MenuBadge({ image, title }) {
  return (
    <li className="badge">
      <span
        className="badge__image"
        style={{ backgroundImage: `url(${image})` }}
      ></span>
      <span className="badge__text title__secondary--sub title darkGray">{title}</span>
    </li>
  );
}

export default MenuBadge;
