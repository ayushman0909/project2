import React, { useState } from 'react';
import './item.css';

const SidebarStyle = ({ onChange }) => {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (style) => {
    let updated = [];

    if (selected.includes(style)) {
      updated = selected.filter(s => s !== style);
    } else {
      updated = [...selected, style];
    }

    setSelected(updated);
    onChange(updated); 
  };

  return (
    <div className="sidebarStyle">
      <h2>Styles</h2>
      <div className="checkbox">
        <input
          type="checkbox"
          id="style1"
          onChange={() => handleCheckboxChange("Traditional")}
        />
        <span>Traditional</span>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="style2"
          onChange={() => handleCheckboxChange("Candid")}
        />
        <span>Candid</span>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="style3"
          onChange={() => handleCheckboxChange("Studio")}
        />
        <span>Studio</span>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="style4"
          onChange={() => handleCheckboxChange("Outdoor")}
        />
        <span>Outdoor</span>
      </div>
    </div>
  );
};

export default SidebarStyle;
