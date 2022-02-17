import React from "react";
import ResturantItem from "../components/ResturantItem";
import { useFetch } from "../customHooks/useFetch";
import { checkForKeywords } from "../helpers/helperFunctions";

function Resturants() {
  const { data } = useFetch(`https://ig-food-menus.herokuapp.com/our-foods`);
  return (
    <main className="app__page home">
      <ul className="resturant home">
        {data &&
          data.map((resturant, index) => {
            const { country, dsc, img, name, price } = resturant;
            return (
              <ResturantItem
                key={index}
                distance={country}
                price={price}
                resturantImage={img}
                resturantTitle={name.substring(0, 26)}
                mealArray={checkForKeywords(dsc)}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Resturants;