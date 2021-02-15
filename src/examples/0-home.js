import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section class='section section-center examples'>
      <h1>netlify serverless functions</h1>
      <h3 class='title'>Examples</h3>
      <ul>
        <li>
          <Link to='/1-hello'>Hello World</Link>
        </li>
      </ul>
    </section>
  )
}

export default HomePage
