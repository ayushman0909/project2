import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css'
const CandidateCard = ({ id, name, profile, location, price, rating, tags }) => {
  const navigate = useNavigate();

  return (
    <div className="CandidateCard">
      <img src={profile} alt={name} />
      <div className="details">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Price: ₹{price}</p>
        <p>Rating: {rating}</p>
        <p>Tags: {tags.join(', ')}</p>
        
      </div>
      <div >
      <button onClick={() => navigate(`/profile/${id}`)} className="viewbtn">View Profile</button>
      </div>
    </div>
  );
};

export default CandidateCard;
