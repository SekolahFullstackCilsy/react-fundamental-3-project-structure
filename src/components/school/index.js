import React, { Component } from 'react'

class School extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.school !== this.props.school
  }

  componentWillUpdate() {
    console.log('school component')
  }

  render() {
    return (
      <div>
        <p>My school in {this.props.school} University</p>
      </div>
    )
  }
}

export default School