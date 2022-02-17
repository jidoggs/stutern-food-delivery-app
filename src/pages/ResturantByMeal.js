import React from "react";
import { useParams } from "react-router-dom";
import ResturantItem from "../components/ResturantItem";
import { useFetch } from "../customHooks/useFetch";
import { checkForKeywords } from "../helpers/helperFunctions";

function ResturantByMeal() {
  const { resturantType } = useParams();
  const { data } = useFetch(
    `https://ig-food-menus.herokuapp.com/${resturantType}`
  );

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
                mealArray={checkForKeywords(dsc, resturantType)}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default ResturantByMeal;
