import { HistoryOutlined } from "@ant-design/icons/lib/icons";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartAddItem, cartRemoveItem } from "../../redux/actions/actionsCart";
import CartIcon from "../customIcons/CartIcon";
import MenuBadge from "./MenuBadge";

function ResturantItem({
  staticItem,
  feature,
  resturantImage,
  resturantTitle,
  distance,
  price,
  mealArray,
  resObj,
  selectState,
}) {
  const [select, setSelect] = useState(selectState);
  const itemRef = useRef(null);
  const dispatch = useDispatch();
  const badgeData =
    mealArray &&
    mealArray.map((meal, index) => <MenuBadge title={meal} key={index} />);

  const addToCartHandler = () => {
    setSelect(!select);
    if (!select) {
      dispatch(cartAddItem({ ...resObj, count: 1 }));
    } else {
      dispatch(cartRemoveItem(resObj.id));
    }
  };

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
        <CartIcon
          className="description__cart"
          itemRef={itemRef}
          onClick={staticItem ? () => (setSelect(!select)) : addToCartHandler}
          added={select}
        />
        <ul className="description__badge">{badgeData}</ul>
      </div>
    </li>
  );
}

export default ResturantItem;
