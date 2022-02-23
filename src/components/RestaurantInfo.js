import React from 'react'
import { NavLink } from 'react-router-dom'
import './RestaurantInfo.css'

export default function RestaurantInfo() {
  const restaurantInfo=JSON.parse(localStorage.getItem('restaurant'));

  var divImg = {
    backgroundImage:'url(data:image/png;base64,'+btoa(restaurantInfo.res_photo.data.reduce((data, byte) => data + String.fromCharCode(byte), '')) + ')' ,
    width:"100vw",
    height:"100vh",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
    overflowX:"hidden",
    overflowY: "hidden"
  };

  console.log(restaurantInfo)
  return (
    <div className='restInfo' >

    </div>
  )
}
