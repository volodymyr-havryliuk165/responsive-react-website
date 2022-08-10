import React from 'react'
import './Home.css'
import Button from '../../button/Button'

function Home() {
  return (
    <div className='home main-content'>
      <h1 className="main-content__heading">Lorem, ipsum dolor.</h1>
      <h2 className="main-content__subheading">Lorem, ipsum.</h2>
      <div className="main-content__buttons">
        <Button>Something</Button>
        <Button>Something else</Button>
      </div>
    </div>
  )
}

export default Home