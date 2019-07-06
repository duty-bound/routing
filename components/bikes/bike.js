import React from 'react'
import { bikes } from './bikes'

export const Bike = (props) => {

  //console.log(props)
  console.log(window.location.href)

  let { match: { params: { id } } } = props
  id = id.split(':')[1]

  return (
    <div>
      <p>Bike: {bikes[id].name}</p>
    </div>
  )
}
