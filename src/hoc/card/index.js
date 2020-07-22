import React from 'react'

import './index.scss'

const CardHOC = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export default CardHOC