import React from 'react'
import cardHOC from '../../hoc/card'

const School = (props) => {
  return (
    <div>
      <p>My school in {props.school} University</p>
    </div>
  )
}

const University = (props) => {
  return (
    <div>
      <p>My university in {props.school}</p>
    </div>
  )
}


export default cardHOC(School)(University)