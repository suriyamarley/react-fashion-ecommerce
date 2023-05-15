import React, { useState } from "react";

const Filter = ({ filterBrands, brands }) => {
  const [selected, setSelected] = useState("All");

  function filterCatogery(position) {
    filterBrands(position);
    setSelected(position);
  }

  return (
    <>
      <ul className="flex justify-center items-center lg:text-xl gap-x-4 md:gap-x-6 bg-black text-white py-4">
        {brands.map((category, index) => {
          return (
            <li
              className={`${
                selected === category ? "bg-slate-800" : null
              } px-3 py-1 rounded-lg cursor-pointer`}
              key={index}
              onClick={() => filterCatogery(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Filter;
