import React from "react";
import Category from "../components/category/Category";
import Hero from "../components/hero/Hero";
import Resturant from "../components/resturantAndMenu/Resturant";

function Home() {
  return (
    <main className="app__page home">
      <Hero />
      <Category />
      <Resturant />
    </main>
  );
}

export default Home;
