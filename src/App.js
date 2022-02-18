import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Resturants from "./pages/Resturants";
import ResturantByMeal from "./pages/ResturantByMeal";
import Deals from "./pages/Deals";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route
            path="/resturants/:resturantType"
            element={<ResturantByMeal />}
          />
          <Route path="/deals" element={<Deals />} />
          <Route path="/mycart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
