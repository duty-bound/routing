import React from 'react'
import{ NavLink, Route } from 'react-router-dom'

export const BoxesMenu = (props) => {

  const menuItems = props.items.map(item =>
    <div className='menu-item' key={item.link}>
      <NavLink exact to={`/${item.link}`}>{item.name}</NavLink>
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
