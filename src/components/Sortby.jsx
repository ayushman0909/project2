import React from 'react';
import './item.css';

const Sortby = ({ onChange }) => {
  return (
    <div className="sidebarSortBy">
      <h2>Sort By</h2>

      <div className="radioItems">
        <input
          type="radio"
          name="sort"
          id="highlow"
          onChange={() => onChange("price-desc")}
        />
        <span>Price: High to Low</span>
      </div>

      <div className="radioItems">
        <input
          type="radio"
          name="sort"
          id="lowhigh"
          onChange={() => onChange("price-asc")}
        />
        <span>Price: Low to High</span>
      </div>

      <div className="radioItems">
        <input
          type="radio"
          name="sort"
          id="rating"
          onChange={() => onChange("recent")}
        />
        <span>Recently Added</span>
      </div>
    </div>
  );
};

export default Sortby;
