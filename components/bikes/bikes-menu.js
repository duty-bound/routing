import React from 'react'
import{ NavLink, Route } from 'react-router-dom'

export const BikesMenu = (props) => {

  const menuItems = props.items.map(item =>
    <div className='menu-item' key={item.link}>
      <NavLink exact to={`/bikes/:${item.id}`}>{item.name}</NavLink>
    </div>
  )

  return(
    <header>
      <nav>
        {menuItems}
      </nav>
    </header>
  )
}
