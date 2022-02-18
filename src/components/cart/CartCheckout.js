import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subTotal } from "../../redux/actions/actionsCart";

function CartCheckout() {
  const subTotalCount = useSelector((state) => state.cartR.cartItemsTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch]);

  return (
    <div className="cart__information-checkout checkout">
      <h3 className="checkout__title title__secondary">Payment summary</h3>
      <div className="checkout__payment">
        <p className="amount text text__level2 checkout__text">
          Subtotal<span className="amount__sub">{`$${subTotalCount}.00`}</span>
        </p>
        <p className="amount text text__level2 checkout__text">
          Shipping<span className="amount__sub">FREE</span>
        </p>
        <h4 className="amount title__tertiary">
          Total (tax incl.){" "}
          <span className="amount__total">{`$${subTotalCount}.00`}</span>{" "}
        </h4>
      </div>
      <button className="title__tertiary checkout__btn btn">
        Proceed to checkout
      </button>
    </div>
  );
}

export default CartCheckout;
