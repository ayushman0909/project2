import React from 'react'
import './item.css'
import { FaStar } from "react-icons/fa";
const Ratings = ({onChange}) => {
  return (
     <div className="sidebarRating">
          <h2>Ratings</h2>
          <div className="radioItems">
            <input type="radio" name="rating" id="4+OrMore" value="1"
          onChange={() => onChange(4)} />
            <span>4<FaStar className='star'/>& more</span>
          </div>
          <div className="radioItems">
            <input type="radio" name="rating" id="3+OrMore" value="1"
          onChange={() => onChange(3)} />
            <span>3<FaStar className='star'/>& more</span>
          </div>
          <div className="radioItems">
            <input type="radio" name="rating" id="2+OrMore"  value="1"
          onChange={() => onChange(2)}/>
            <span> 2<FaStar className='star'/>& more</span>
          </div>
          <div className="radioItems">
            <input type="radio" name="rating" id="1+OrMore" value="1"
          onChange={() => onChange(1)}  defaultChecked/>
            <span>1<FaStar className='star'/>& more</span>
          </div>
        </div>
  )
}

export default Ratings
