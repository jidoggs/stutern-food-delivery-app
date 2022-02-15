import React from "react";

function CartCheckout() {
  return (
    <div className="cart__information-checkout checkout">
      <h3 className="checkout__title title__secondary">Payment summary</h3>
      <div className="checkout__payment">
        <p className="amount text text__level2 checkout__text">
          Subtotal<span className="amount__sub">$129.40</span>
        </p>
        <p className="amount text text__level2 checkout__text">
          Shipping<span className="amount__sub">FREE</span>
        </p>
        <h4 className="amount title__tertiary">
          Total (tax incl.) <span className="amount__total">$129.40</span>{" "}
        </h4>
      </div>
      <button className="title__tertiary checkout__btn btn">
        Proceed to checkout
      </button>
    </div>
  );
}

export default CartCheckout;
