import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='page-container'>
      <h1>netlify serverless functions</h1>
      <h3>React Examples</h3>
      <ul className='example-links'>
        <li>
          <Link to='/1-hello'>Hello World</Link>
        </li>
        <li>
          <Link to='/2-basic-api'>Basic API</Link>
        </li>
        <li>
          <Link to='/3-airtable'>Airtable</Link>
        </li>
        <li>
          <Link to='/4-survey'>Survey</Link>
        </li>
        <li>
          <Link to='/5-weather'>Weather</Link>
        </li>
        <li>
          <Link to='/6-newsletter'>Newsletter</Link>
        </li>
        <li>
          <Link to='/7-email'>Email</Link>
        </li>
        <li>
          <Link to='/8-stripe'>Stripe</Link>
        </li>
      </ul>
    </section>
  )
}

export default Home
