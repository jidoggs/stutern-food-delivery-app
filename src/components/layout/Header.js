import React from "react";
import { Input } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";
import CartIcon from "../customIcons/CartIcon";
import { useSelector } from "react-redux";
import avatar from '../../static/images/avatar.png'

const { Search } = Input;
function Header() {
  const { pathname } = useLocation();
  const cartItems = useSelector((state) => state.cartR.cart);

  const isAddedinView = () => {
    if (pathname === "/mycart") {
      return true;
    }
    return undefined;
  };

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
              <NavLink to={"/resturants"}>Restaurants</NavLink>
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
              {!isAddedinView() && (
                <span className="nav__cart-count">{cartItems.length}</span>
              )}
              <NavLink to={"/mycart"}>
                <CartIcon
                  added={isAddedinView()}
                  bgYes
                  className="nav__cart-icon"
                />
              </NavLink>
            </li>
            <li className="nav__link6">
              <NavLink to={"/profile"}>
                <span className="profile__picture" style={{backgroundImage: `url(${avatar})`}}></span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
