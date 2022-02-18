import React from "react";
import ResturantItem from "./ResturantItem";

function Resturant() {
  return (
    <section className="home__resturant home">
      <h5 className="title__primary mb1">Nearby restaurants</h5>
      <ul className="resturant">
        <ResturantItem
        staticItem
          feature
          resturantTitle={"Royal Sushi House"}
          resturantImage={
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8&w=1000&q=80"
          }
          distance={"30-40"}
          price={32}
          mealArray={["best-foods"]}
        />
        <ResturantItem
        staticItem
        feature
          resturantTitle={"Burgers & Pizza"}
          resturantImage={
            "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
          }
          distance={"40-60"}
          price={24}
          mealArray={["burgers","pizzas"]}

        />
        <ResturantItem
        staticItem
        resturantTitle={"Ninja sushi"}
          resturantImage={"https://media.istockphoto.com/photos/sushi-set-on-bamboo-plate-picture-id1053855452?k=20&m=1053855452&s=612x612&w=0&h=yEl9DZtumD162c5yb_nhjogyZvhpEND8HZAzj4LE7RM="}
          distance={"20-40"}
          price={40}
          mealArray={["best-foods"]}

        />
        <ResturantItem
        staticItem
        resturantTitle={"Sushi master"}
          resturantImage={"https://www.namesnack.com/images/namesnack-sushi-bar-business-names-5552x3701-20200915.jpeg?crop=4:3,smart&width=1200&dpr=2"}
          distance={"60-70"}
          price={49}
          mealArray={["best-foods","drinks"]}

        />
        <ResturantItem
        staticItem
        resturantTitle={"Japanese sushi"}
          resturantImage={"https://i2.wp.com/blog.ofadaa.com/wp-content/uploads/2015/12/best-sushi-restaurants-lagos-1.jpg?zoom=2.625&fit=740%2C494&ssl=1"}
          distance={"30-50"}
          price={104}
          mealArray={["best-foods"]}

        />
        <ResturantItem
        staticItem
        resturantTitle={"Kobe"}
          resturantImage={"https://i2.wp.com/blog.ofadaa.com/wp-content/uploads/2015/12/best-sushi-restaurants-lagos-1.jpg?zoom=2.625&fit=740%2C494&ssl=1"}
          distance={"20-30"}
          price={67}
          mealArray={["best-foods"]}

        />
      </ul>
    </section>
  );
}

export default Resturant;
