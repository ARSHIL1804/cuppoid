import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import './home.css'
import Navbar from './Navbar';
import Axios from 'axios'


export default function Home() {
  const [topFive,setTopFive]=useState([]);
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  function GetTopFive(){
    Axios.post("http://localhost:8080/api/topfive",{},axiosConfig.headers)
    .then(response => {
      if(response.data.error === ''){
          setTopFive(response.data.results)
      }
      else{
      }
    })
  }
  useEffect(() => {
    GetTopFive();
  }, [])
  
  return (
    <div className='Home bg-light'>
          <Navbar/>
          <div className='entry'>
            <div className="overlay">
                <h1>
                  Cuppoid
                </h1>
                <h5>Make a good deal here</h5>
            </div>
          </div>
          <div className='top-hotels mt-3'>
              <div className='t-heading'>
                    Cafes
              </div>
              <div className='hotels-container mt-3'>
                {
                  topFive.map(item=>{
                    console.log(item)
                    return <Card key={item.rest_id} data={item}/>
                  })
                }
              </div>
              <div className='mt-4'>
                <NavLink  className="btn btn-outline-primary" to="/restaurant">View More</NavLink>
              </div>
         </div>       
         <div className='footer mt-4'></div>
    </div>
  )
}
