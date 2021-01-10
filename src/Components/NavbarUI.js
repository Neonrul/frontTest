import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../Assets/Image/Circles.png'

const NavbarUI = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt={''}/>{' '}
                </Navbar.Brand>
                <Nav.Item className="mr-auto">
                    <Nav.Link as={NavLink} to={'/goods-menu'}>
                        <h4 style={{color:'darkgrey'}}>Goods MENU</h4>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default NavbarUI