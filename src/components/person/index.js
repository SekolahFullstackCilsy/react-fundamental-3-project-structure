import React, { Component } from 'react'

class Person extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <p>Hello my name is {this.props.name}</p>
        <p>I'm {this.props.age} years old</p>
      </div>
    )
  }
}

export default Person