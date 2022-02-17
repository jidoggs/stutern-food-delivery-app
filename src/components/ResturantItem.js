import { HistoryOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import CartIcon from "./customIcons/CartIcon";
import MenuBadge from "./MenuBadge";

function ResturantItem({
  feature,
  resturantImage,
  resturantTitle,
  distance,
  price,
  mealArray,
}) {
  const badgeData =
    mealArray &&
    mealArray.map((meal, index) => <MenuBadge title={meal} key={index} />);

  return (
    <li className="resturant__item">
      {feature && <span className="resturant__item-feature">FEATURED</span>}
      <span
        className="resturant__item-image"
        style={{ backgroundImage: `url(${resturantImage})` }}
      ></span>
      <div className="resturant__item-description description">
        <h6 className="title__secondary description__title">
          {resturantTitle}
        </h6>
        <p className="title__secondary--sub description__sub">
          <HistoryOutlined className="icon" />
          <span className="distance">{`${distance} min`}</span>
          <span className="seprator"></span>
          <span className="price">{`$${price} min sum`}</span>
        </p>
        <CartIcon className="description__cart" />
        <ul className="description__badge">{badgeData}</ul>
      </div>
    </li>
  );
}

export default ResturantItem;
