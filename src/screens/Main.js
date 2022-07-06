import React, { useState } from 'react'
import data from '../data/career'
import List from '../components/List'

const Main = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>Cowkite Lee</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default Main
