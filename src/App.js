import React, { Component } from 'react'
import Person from './components/person'
import School from './components/school'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        name: "Bagus",
        age: 20,
        school: "MIT"
      },
      mount: true
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleChangeName = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        name: 'Taufan'
      }
    })
  }

  handleChangeSchool = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        school: 'UI'
      }
    })
  }

  handleUnmount = () => {
    this.setState({
      ...this.state,
      mount: false
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        {
          this.state.mount ? <Person name={this.state.data.name} age={this.state.data.age} /> : null
        }
        <School school={this.state.data.school} />
        <button onClick={this.handleChangeName}>Ubah State</button>
        <button onClick={this.handleChangeSchool}>Ubah School</button>
        <button onClick={this.handleUnmount}>Unmount</button>
      </div>
    )
  }
}

export default App