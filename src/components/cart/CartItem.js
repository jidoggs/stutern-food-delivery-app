import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "../customIcons/DeleteIcon";
import {
  cartRemoveItem,
  decreaseCartItemCount,
  increaseCartItemCount,
  subTotal,
} from "../../redux/actions/actionsCart";

function CartItem({
  itemImage,
  itemTitle,
  itemDescription,
  itemValue,
  itemId,
  itemCount,
}) {
  const dispatch = useDispatch();

  const increaseCountHandler = () => {
    dispatch(increaseCartItemCount({ id: itemId, count: itemCount }));
    dispatch(subTotal())
  };
  const decraseCountHandler = () => {
    if (itemCount > 1) {
      dispatch(decreaseCartItemCount({ id: itemId, count: itemCount }));
      dispatch(subTotal())
    }
  };
  const removeCartHandler = () => { 
    dispatch(cartRemoveItem(itemId))
    dispatch(subTotal())
   }

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
        <span className="count__btn " onClick={decraseCountHandler}>
          -
        </span>
        {itemCount}
        <span className="count__btn" onClick={increaseCountHandler}>
          +
        </span>
      </div>

      <p className="cart__item-value title__secondary">{`$${
        Math.ceil(itemValue * itemCount)
      }.00`}</p>
      <DeleteIcon className="icon__delete" onClick={removeCartHandler} />
    </li>
  );
}

export default CartItem;
