import React from 'react'
import { NavLink } from 'react-router-dom'
import'./home.css'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-dark">
            <NavLink className="navbar-brand"  to="/">Cuppoid</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink  className={({isActive})=>{
                    return 'nav-link '+(!isActive?"":"current")
                  }} to='/'>Home </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink  className={({isActive})=>{
                    return 'nav-link '+(!isActive?"":"current")
                  }}  to="/restaurant">Restaurants</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({isActive})=>{
                    return 'nav-link '+(!isActive?"":"current")
                  }}  to="/profile">Pofile</NavLink>
                </li>
              </ul>
            </div>
          </nav>

  )
}
