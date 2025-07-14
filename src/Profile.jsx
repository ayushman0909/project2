import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/photographers/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
   <div className="profilePage">
  <div className="profiledetail">
    <h2>{data.name}</h2>
    <img src={data.profilePic} alt={data.name} />
    <p>Location: {data.location}</p>
    <p>Price: ₹{data.price}</p>
    <p>Rating: {data.rating}★</p>
    <p>Bio: {data.bio}</p>
    <p>Styles: {data.styles.join(", ")}</p>
    <p>Tags: {data.tags.join(", ")}</p>

    <h3>Portfolio</h3>
    <div className="portfolio">
      {data.portfolio.map((img, idx) => (
        <img key={idx} src={img} alt={`portfolio-${idx}`} />
      ))}
    </div>

    <h3>Reviews</h3>
    {data.reviews.map((rev, idx) => (
      <div key={idx}>
        <p>{rev.name} ({rev.rating}★): {rev.comment}</p>
      </div>
    ))}
  </div>
</div>

   
  );
};

export default Profile;
