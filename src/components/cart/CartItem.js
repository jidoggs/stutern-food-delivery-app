import React from "react";
import DeleteIcon from "../customIcons/DeleteIcon";

function CartItem({ itemImage, itemTitle, itemDescription, itemValue }) {
  return (
    <li className="cart__item">
      <div
        className="cart__item-image"
        style={{ backgroundImage: `url(${itemImage})` }}
      ></div>
      <h4 className="cart__item-title title__tertiary">{itemTitle}</h4>
      <p className="cart__item-description text text__level1">
        {itemDescription}
      </p>
      <div className="cart__item-count count">
        <span className="count__btn ">-</span>1
        <span className="count__btn">+</span>
      </div>

      <p className="cart__item-value title__secondary">{itemValue}</p>
      <DeleteIcon className="icon__delete" />
    </li>
  );
}

export default CartItem;
