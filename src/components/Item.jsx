import React, { useEffect, useState } from "react";
import "./item.css";
import SidebarStyle from "./sidebarStyle";
import PriceRange from "./PriceRange";
import Ratings from "./Ratings";
import City from "./city";
import Sortby from "./Sortby";
import CandidateCard from "./candidateCard";
import axios from "axios";
import profile from './herosecProfileimg.png'
const Item = () => {
  const[photographers,setPhotographers]=useState([]);
  const[filteredphotographers,setFilteredphotographers]=useState([]);
  //filter hook
  const [selectedStyles, setSelectedStyles] = useState([]);
const [selectedCity, setSelectedCity] = useState("");
const [selectedPriceRange, setSelectedPriceRange] = useState([0, 20000]);
const [selectedRating, setSelectedRating] = useState(0);
const [sortBy, setSortBy] = useState("");
  useEffect(()=>{
  axios.get("http://localhost:3001/photographers")
  .then((res)=>{
    let data=res.data;
   
    setPhotographers(data)
    setFilteredphotographers(data)
    console.log(data)
    })
  },[])
  useEffect(() => {
  let filtered = photographers.filter(p => {
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.some(style => p.styles.includes(style));
    const matchesCity = selectedCity === "" || p.location === selectedCity;
    const matchesPrice = p.price >= selectedPriceRange[0] && p.price <= selectedPriceRange[1];
    const matchesRating = p.rating >= selectedRating;

    return matchesStyle && matchesCity && matchesPrice && matchesRating;
  });

  if (sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "recent") {
   filtered.sort((a, b) => b.id - a.id); 
  }

 setFilteredphotographers(filtered)
  setVisibleCount(8); // reset to first 8 on filter change
}, [photographers, selectedStyles, selectedCity, selectedPriceRange, selectedRating, sortBy]);

  const [visibleCount, setVisibleCount] = useState(8);
  
  
  return (
    <div className="MainContainer">
      <div className="sidebar">
         <SidebarStyle onChange={setSelectedStyles}/>
         <hr />
         <PriceRange onChange={setSelectedPriceRange}/>
         <hr />
         <Ratings onChange={setSelectedRating}/>
         <hr />
         <City onChange={setSelectedCity}/>
         <hr />
         <Sortby onChange={setSortBy}/>
      </div>
      <div className="itemContainer">
        <div className="cards">
        {
          filteredphotographers.slice(0, visibleCount).map((candidate,index)=>{
          return  <CandidateCard 
            key={index}
            id={candidate.id}
            name={candidate.name}
            profile={profile}
            location={candidate.location} 
            price={candidate.price} 
            rating={candidate.rating} 
            tags={candidate.tags}        
             />


          })
        }</div>
        {visibleCount<=filteredphotographers.length &&(<div className="loadmore">
        <button type="button" className="loadmorebtn" onClick={()=>setVisibleCount(prev=>prev+4)}>Load More</button></div>)}
      </div>
    </div>
  );
};

export default Item;
