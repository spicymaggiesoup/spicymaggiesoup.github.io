import React, { useState } from 'react'
import data from '../data/career'
import List from '../components/List'

import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

const Home = () => {
  // const [people, setPeople] = useState(data)
  // return (
  //   <main>
  //     <section className='container'>
  //       <h3>Cowkite Lee</h3>
  //       <List people={people} />
  //       <button onClick={() => setPeople([])}>clear all</button>
  //     </section>
  //   </main>
  // )
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default Home
