import React from "react";
import "./Controls.css";

export default function Controls() {
  const dietList = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ];

  return (
    <div className="control-wrapper">
      <label htmlFor="food-filter" className='sort-by-label'>Sort by
      <select id="food-filter">
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
        <option value="high-health">High Health Score</option>
        <option value="low-health">Low Health Score</option>
      </select></label>
      <label htmlFor="search-box" className='search-box-label'>
            Search
      <input type="text" id="search-box" /></label>
      <div className="diet-filters">
        <label htmlFor='diet-check'>Filter by Diet</label>
        <div className="diet-check">
          {dietList.map((obj, index) => (
            <label htmlFor={"r" + index} className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                name={obj}
                id={"r" + index}
              />
              <div className="check__box"></div>
              {obj}
            </label>
          ))}
        </div>
      </div>
      
    </div>
  );
}

//["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"]
