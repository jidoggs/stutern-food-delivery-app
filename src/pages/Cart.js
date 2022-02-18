import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCheckout from "../components/cart/CartCheckout";
import CartItem from "../components/cart/CartItem";
import DeliveryInfo from "../components/cart/DeliveryInfo";

function Cart() {
  const cartItems = useSelector((state) => state.cartR.cart);
  let navigate = useNavigate();

  const addMoreMealsClickChandler = () => {
    navigate("/deals");
  };

  return (
    <main className="app__page cart">
      <h2 className="title__primary mb1">My cart</h2>
      <section className="cart__menu">
        <h3 className="title__secondary">
          Menu{" "}
          <span className="title__secondary--sub">{`${cartItems.length} meals`}</span>{" "}
        </h3>
        <ul className="cart__items">
          {cartItems.map((cartItm, idx) => {
            const { dsc, img, name, price, id, count } = cartItm;

            return (
              <CartItem
                key={idx}
                itemDescription={dsc}
                itemImage={img}
                itemTitle={name}
                itemValue={price}
                itemId={id}
                itemCount={count}
              />
            );
          })}
        </ul>
      </section>
      <button
        className="title__tertiary cart__addBtn btn mt-75"
        onClick={addMoreMealsClickChandler}
      >
        {" "}
        ← Add more meals
      </button>
      <section className="cart__information">
        <DeliveryInfo />
        <CartCheckout />
      </section>
    </main>
  );
}

export default Cart;
