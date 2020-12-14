import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
            <LinkContainer to="/shop">
                <Navbar.Brand>eCommerce Web App</Navbar.Brand>
            </LinkContainer>
             <LinkContainer to="/shop">
                 <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store-locator">
                 <Nav.Link>Store Locator</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/create-product">
                 <Nav.Link>Create Product</Nav.Link>
            </LinkContainer> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/wishlist">
                    <Nav.Link><i class="fas fa-heart"></i>Wish List</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                   <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header