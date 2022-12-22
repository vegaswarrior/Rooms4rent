import React from 'react'
// import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from "./Avatar";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
// import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'





const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const productList = useSelector((state) => state.productList);
  const {loading, error, products, page, pages} = productList;
  return (
    <header>
    <Navbar  variant='dark' expand='lg' className='navbar1 bg-dark'>
        <Container className='navbar_container' fluid>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Nav className="me-auto" id="first_nav">
            <LinkContainer to="/">
				<Navbar.Brand className="jumboH2 text-info ">Home</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/about">
				<Navbar.Brand className="jumboH2 text-info">About</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/contact">
				<Navbar.Brand className="jumboH2 text-info">Contact Us</Navbar.Brand>
			</LinkContainer>
          </Nav>
          <Nav className="ml-auto" >
							{userInfo ? (
								<div className="d-lg-flex justify-content-start ms-lg-5">
									<Avatar size="40px" url={userInfo.avatar} className="" />
									<NavDropdown title={userInfo.name} id="username">
										<LinkContainer to="/profile">
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
									</NavDropdown>
								</div>
							) : (
								<LinkContainer to="/login">
									<Nav.Link >
									  Sign In
									</Nav.Link>
								</LinkContainer>
							)}
			              {userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
								<LinkContainer to='/admin/userlist'>
									<NavDropdown.Item>Users</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/productlist'>
									<NavDropdown.Item>Properties</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/tenantlist'>
									<NavDropdown.Item>Tenants</NavDropdown.Item>
								</LinkContainer>
								</NavDropdown>
							)}
						
						</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header