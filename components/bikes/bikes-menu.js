import React from 'react'
import{ Link } from 'react-router-dom'

export const BikesMenu = (props) => {

  const menuItems = props.items.map(item =>
    <div className='menu-item' key={item.link}>
      <Link exact to={`/bikes/:${item.id}`}>{item.name}</Link>
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
