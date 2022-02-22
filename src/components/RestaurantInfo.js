import React from 'react'

export default function RestaurantInfo(props) {
  return (
    <div>
          <nav className="navbar  bg-dark">
            <NavLink className="navbar-brand"  to="/">{props.data.name}</NavLink>
          </nav>
    </div>
  )
}
