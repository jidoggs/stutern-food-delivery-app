import React from "react";
import CategoryItem from "./CategoryItem";

function Category() {
  const items = ["Pizza", "Pizza", "Pizza", "Pizza", "Pizza", "Pizza"];
  return (
    <section className="home__category home">
      <ul className="category">
        {items.map((item, index) => (
          <CategoryItem key={index} link={item} title={item} image={""} />
        ))}
      </ul>
    </section>
  );
}

export default Category;
