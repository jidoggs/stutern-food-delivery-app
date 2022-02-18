import React from "react";
import HeroCard from "./HeroCard";
import img1 from "../../static/images/img1.png";
import img2 from "../../static/images/img2.png";

function Hero() {
  return (
    <section className="home__hero hero home">
      <HeroCard type="All deserts" discount="20" name="Deserty" image={img1} />
      <HeroCard
        color
        type="Big Burgers"
        discount="50"
        name="Fooddies"
        image={img2}
      />
    </section>
  );
}

export default Hero;
