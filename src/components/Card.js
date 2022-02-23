import React from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css'

export default function Card(props) {
    const navigate=useNavigate();
    var rating =parseFloat(props.data.res_rating);
    var ratingObj=[{id:1,rating:0.0},{id:2,rating:0.0},{id:3,rating:0.0},{id:4,rating:0.0},{id:5,rating:0.0}]
    for(var i=0;i<5;i++){
         if(rating>=1.0)ratingObj[i].rating=1.0;
         else if (rating>=0.0)ratingObj[i].rating=0.5;
         else ratingObj[i].rating=0.0;
         rating-=1.0;
    }
    function openRestaurant(){
        console.log()
        localStorage.setItem("restaurant",JSON.stringify(props.data));
        navigate('/restaurantinfo'); 
    }
  return (
    <div className="card rounded" style={{width: "300px",minWidth:"300px",margin:"10px"}} onClick={openRestaurant}>
          <div className='overflow'>
              <img className='card-img-top' src={'data:image/png;base64,'+btoa(props.data.res_photo.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))} alt="Card image cap"/>
          </div>
          <div className="card-body p-4">
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text">{props.data.cuppon_description}</p>

            <p className="card-text">
                {
                  ratingObj.map(item=>{
                    if(item.rating===1.0)return <i key={item.id} className="fa fa-star teal-color" aria-hidden="true"></i>;
                    else if(item.rating===0.5)return <i key={item.id} className="fa fa-star-half-o teal-color" aria-hidden="true"> </i>
                    else return <i key={item.id} className="fa fa-star-o grey-color" aria-hidden="true"> </i>
                  })
                }
            </p>
            <p className="card-text"><small className="text-muted">{props.data.location}</small></p>
          </div>
    </div>
  )
}
