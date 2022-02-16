import React from "react";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <section className="home__hero hero home">
      <HeroCard
        type="All deserts"
        discount="20"
        name="Deserty"
        // image={
        //   "https://w7.pngwing.com/pngs/317/859/png-transparent-graphy-of-burger-with-tomato-and-vegetable-veggie-burger-hamburger-vegetarian-cuisine-chicken-sandwich-vada-pav-burger-food-cheese-recipe.png"
        // }
      />
      <HeroCard
        color
        type="Big Burgers"
        discount="50"
        name="Fooddies"
        // image={
        //   "https://toppng.com/uploads/preview/hamburger-11599648567df5j04phrd.png"
        // }
      />
    </section>
  );
}

export default Hero;
