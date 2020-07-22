import React, { useEffect, useState, Fragment } from 'react'
import Person from './components/person'
import School from './components/school'
import CardHOC from './hoc/card'

const App = () => {
  useEffect(() => {
    console.log('componentDidMount')
  }, [])

  const [data, setData] = useState({
    name: 'Bagus',
    age: 20,
    school: 'MIT'
  })
  const [mount, setMount] = useState(true)

  const handleChangeName = () => {
    setData({
      ...data,
      name: 'Taufan'
    })
  }

  const handleChangeSchool = () => {
    setData({
      ...data,
      school: 'UI'
    })
  }

  const handleUnmount = () => {
    setMount(false)
  }

  return (
    <Fragment>
      {
        mount ? <Person name={data.name} age={data.age} /> : null
      }
      <School school={data.school} />
      <button onClick={handleChangeName}>Ubah State</button>
      <button onClick={handleChangeSchool}>Ubah School</button>
      <button onClick={handleUnmount}>Unmount</button>

      <CardHOC>
        <p>Halo Semua</p>
        <p>Halo Semua</p>
        <button>Button</button>
        <input></input>
      </CardHOC>

    </Fragment>
  )
}

export default App