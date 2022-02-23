import React,{useState,useEffect} from 'react'
import Card from './Card'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './Restaurant.css'
import Axios  from 'axios'
import RestaurantInfo from './RestaurantInfo'
export default function Restuarent() {
  const [allRestaurant,setRestaurant]=useState([]);
  const [filterRestaurant,setFilterRestaurant]=useState([]);
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  function GetAllRestaurant(){
    Axios.post("http://localhost:8080/api/getAllRestaurant",{},axiosConfig.headers)
    .then(response => {
      if(response.data.error === ''){
        setRestaurant(response.data.results)
        setFilterRestaurant(response.data.results)
      }
      else{
      }
    })
  }
  function filterCity(cityName){
    if(cityName=="All")setFilterRestaurant(allRestaurant);
    else{
    let temp=[]
    allRestaurant.map(item=>{
      if(item.location===cityName)temp=[...temp,item]
    })
    setFilterRestaurant(temp);
    }
  }
  useEffect(() => {
    GetAllRestaurant();
  }, [])
  
  return (
       <div>
              <Navbar/>
              <div className='t-heading mt-4 ml-4'>
                    Cafes
              </div>
              <div className="dropdown mt-3 ml-4">
                  <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Fity City
                  </a>
                  <div className="dropdown-menu"  aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" onClick={()=>{filterCity("All")}}>All</a>
                    <a className="dropdown-item" onClick={()=>{filterCity("Ahemdabad")}}>Ahemndabad</a>
                    <a className="dropdown-item" onClick={()=>{filterCity("Anand")}}>Anand</a>
                    <a className="dropdown-item" onClick={()=>{filterCity("Surat")}}>Surat</a>
                    <a className="dropdown-item" onClick={()=>{filterCity("Vadodara")}}>Vadodara</a>
                  </div>
              </div>
              <div className='hotels-container mt-3'>
                {
                  filterRestaurant.map(item=>{
                    console.log(item)
                    return <Card key={item.rest_id} data={item}/>
                  })
                }
              </div>
      <div className='footer mt-4'></div>
   </div>
  )
}
