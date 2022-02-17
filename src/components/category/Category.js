import React from "react";
import { useFetch } from "../../customHooks/useFetch";
import CategoryItem from "./CategoryItem";

function Category() {
  const { data } = useFetch("https://ig-food-menus.herokuapp.com/pagination");

  const response = data && Object.keys(data);

  return (
    <section className="home__category home">
      <ul className="category">
        {response.map((item, index) => (
          <CategoryItem key={index} link={item} title={item} />
        ))}
      </ul>
    </section>
  );
}

export default Category;
