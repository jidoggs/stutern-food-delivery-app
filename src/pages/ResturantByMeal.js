import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IsLoading from "../components/layout/IsLoading";
import ResturantItem from "../components/resturantAndMenu/ResturantItem";
import { useFetch } from "../customHooks/useFetch";
import { checkForKeywords } from "../helpers/helperFunctions";

function ResturantByMeal() {
  const { resturantType } = useParams();
  const { data,isPending } = useFetch(
    `https://ig-food-menus.herokuapp.com/${resturantType}`
  );
  const cartItems = useSelector((state) => state.cartR.cart);

  const result =
    data &&
    data.map((resturant, index) => {
      const { country, dsc, img, name, price, id } = resturant;

      if (cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
          const element = cartItems[i];

          if (element.id === id) {
            return (
              <ResturantItem
                key={index}
                distance={country}
                price={price}
                resturantImage={img}
                resturantTitle={name.substring(0, 26)}
                mealArray={checkForKeywords(dsc, resturantType)}
                resObj={resturant}
                selectState={true}
              />
            );
          }
        }
      }

      return (
        <ResturantItem
          key={index}
          distance={country}
          price={price}
          resturantImage={img}
          resturantTitle={name.substring(0, 26)}
          mealArray={checkForKeywords(dsc, resturantType)}
          resObj={resturant}
          selectState={false}
        />
      );
    });

  return (
    <main className="app__page home">
      <ul className="resturant home">{data && result}</ul>
      {isPending && <IsLoading />}
    </main>
  );
}

export default ResturantByMeal;
