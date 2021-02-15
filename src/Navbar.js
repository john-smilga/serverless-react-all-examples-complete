import React from 'react'
import logo from './assets/logo.svg'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Wrapper>
      <div class='nav-header'>
        <img src='./assets/logo.svg' alt='logo' />
        <a href='index.html'>Home</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-5);

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
    letter-spacing: var(--spacing);
    color: var(--clr-white);
  }
`

export default Navbar
