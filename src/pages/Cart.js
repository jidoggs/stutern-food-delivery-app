import React from "react";
import CartCheckout from "../components/cart/CartCheckout";
import CartItem from "../components/cart/CartItem";
import DeliveryInfo from "../components/cart/DeliveryInfo";

function Cart() {
  return (
    <main className="app__page cart">
      <h2 className="title__primary mb1">My cart</h2>
      <section className="cart__menu">
        <h3 className="title__secondary">
          Menu <span className="title__secondary--sub">4 meals</span>{" "}
        </h3>
        <ul className="cart__items">
          <CartItem
            itemImage="https://media-cdn.tripadvisor.com/media/photo-s/19/9e/c0/32/random-restaurant.jpg"
            itemTitle={"Chicken & Ribs Combo"}
            itemDescription="Lorem ipsum dolor sit amet, pri atqui facete evertitur an, ea assum
        solet invidunt vim."
            itemValue="$12.40"
          />
          <CartItem
            itemImage="https://media-cdn.tripadvisor.com/media/photo-s/19/9e/c0/32/random-restaurant.jpg"
            itemTitle={"Chicken & Ribs Combo"}
            itemDescription="Lorem ipsum dolor sit amet, pri atqui facete evertitur an, ea assum
        solet invidunt vim."
            itemValue="$12.40"
          />
        </ul>
      </section>
      <button className="title__tertiary cart__addBtn btn mt">
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
