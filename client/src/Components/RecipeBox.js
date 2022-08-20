import React from "react";
import './RecipeBox.css';
export default function RecipeBox({ food, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  function clickHandler() {
    console.log('clicked')
  }
  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        {food.map((obj) => (
          <div className="card" onClick={clickHandler}>
            <div className="card-title"><h4>{obj.title}</h4></div>
            <img alt={obj.title} src={obj.image}/></div>
        ))}
      </div>
    </div>
  );
}
