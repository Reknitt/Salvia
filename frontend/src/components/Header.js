import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand style={{marginLeft: '8px'}} href='/'>Salvia</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav'/>
        <Navbar.Collapse id='navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link href='/'>About</Nav.Link>
                <Nav.Link href='/'>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header