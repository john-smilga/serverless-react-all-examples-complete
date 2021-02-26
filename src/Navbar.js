import React from 'react'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <Link to='/'>Home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-500);

  .nav-header {
    width: 90vw;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
  }
  .nav-header img {
    width: 10rem;
    margin-right: 5rem;
  }
  .nav-header a {
    display: block;
    margin-top: 0.75rem;
    letter-spacing: var(--spacing);
    color: var(--white);
  }
`

export default Navbar
