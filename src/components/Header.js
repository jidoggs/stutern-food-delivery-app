import React from "react";
import { Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "./customIcons/CartIcon";

const { Search } = Input;
function Header() {
  return (
    <header className="app__header">
      <div className="header">
        <h1 className="logo">
          <Link to={"/"}>
            Food
            <span className="logo__color">delivery</span>
          </Link>
        </h1>
        <form className="header__form">
          <Search placeholder="Search" className="header__form--search" />
        </form>
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__link1">
              <NavLink to={"/resturant"}>Restaurants</NavLink>
            </li>
            <li className="nav__link2">
              <NavLink to={"/deals"}>Deals</NavLink>
            </li>
            <li className="nav__link3">
              <hr />
            </li>
            <li className="nav__link4">
              <NavLink to={"/mycart"}>
                <span>My orders</span>
              </NavLink>
            </li>
            <li className="nav__link5 nav__cart">
              <span className="nav__cart-count">25</span>
              <NavLink to={"/mycart"}>
                <CartIcon bgYes className="nav__cart-icon" />
              </NavLink>
            </li>
            <li className="nav__link6">
              <NavLink to={"/profile"}>
                <span className="profile__picture"></span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
