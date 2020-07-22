import React, { useEffect } from 'react'

const Person = (props) => {
  useEffect(() => {
    console.log('componentDidUpdate')
  }, [props])

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])

  return (
    <div>
      <p>Hello my name is {props.name}</p>
      <p>I'm {props.age} years old</p>
    </div>
  )
}

export default Person