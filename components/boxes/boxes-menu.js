import React from 'react'
import{ Link } from 'react-router-dom'

export const BoxesMenu = (props) => {

  const menuItems = props.items.map(item =>
    <div className='menu-item' key={item.link}>
      <Link exact to={`/${item.link}`}>{item.name}</Link>
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
