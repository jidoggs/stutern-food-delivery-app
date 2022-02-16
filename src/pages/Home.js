import { HistoryOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Resturant from "../components/Resturant";

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
