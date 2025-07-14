import React, { useState } from "react";
import './item.css'
const PriceRange = ({onChange}) => {
  const min=5000;
  const max=30000;
  const [price, setPrice] = useState(max);
  
    const handleChange = (e) => {
    const newMax = Number(e.target.value);
    setPrice(newMax);               
    onChange([min, newMax]);       
  };
  return (
    <div className="sidebarPriceRange">
      <h2>Price Range</h2>
      <div className="sliderContainer">
        <input
          type="range"
          value={price}
          min={min}
          max={max}
          step={10}
          onChange={handleChange}
            
          
          className="slider"
        />
      </div>
      <div className="price-values">
        ₹{price}
      </div>
    </div>
  );
};

export default PriceRange;
