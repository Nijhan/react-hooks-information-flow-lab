import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <select name="filter" value={selectedCategory} onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
