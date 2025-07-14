import React from 'react'
import location from './bengaluruCities.json'
const City = () => {
  return (
    <div className='cities'>
        <h2>Cities</h2>
      <select name="DropDown" id="DropDown">
        {location.map((city,index)=>{
            return <option key={index}value={city}>{city}</option>
        })}
      </select>
    </div>
  )
}

export default City
