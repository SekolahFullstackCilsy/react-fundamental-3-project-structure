import React from 'react'

import './index.scss'

const cardHOC = (WrapComponent) => (Component) => (props) => {
  return (
    <div className="container">
      <WrapComponent {...props} />
      <Component {...props} />
    </div>
  )
}

export default cardHOC