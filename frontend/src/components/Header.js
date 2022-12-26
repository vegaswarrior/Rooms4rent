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
				<Navbar.Brand className="jumboH2 text-danger ">Home</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/about">
				<Navbar.Brand className="jumboH2 text-danger">About</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/contact">
				<Navbar.Brand className="jumboH2 text-danger">Contact Us</Navbar.Brand>
			</LinkContainer>			              
			              {userInfo && userInfo.isAdmin && (
								<NavDropdown title='Properties' id='adminmenu'>

			                  <LinkContainer to='/admin/SnowFlower/1'>
									<NavDropdown.Item className="jumboH5 text-info">Snow Flower</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Tropicana/1'>
									<NavDropdown.Item className="jumboH5 text-info">Tropicana</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/SirGeorge/1'>
									<NavDropdown.Item className="jumboH5 text-info">Sir George</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/SirDavid/1'>
									<NavDropdown.Item className="jumboH5 text-info">Sir David</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/SantaAnita/1'>
									<NavDropdown.Item className="jumboH5 text-info">Santa Anita</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Sandmist/1'>
									<NavDropdown.Item className="jumboH5 text-info">Sandmist</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/LivingDesert/1'>
									<NavDropdown.Item className="jumboH5 text-info">Living Desert</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Lamont/1'>
									<NavDropdown.Item className="jumboH5 text-info">Lamont</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Hialeah/1'>
									<NavDropdown.Item className="jumboH5 text-info">Hialeah</NavDropdown.Item>
								</LinkContainer>
								</NavDropdown>
							)}
			              {userInfo && userInfo.isAdmin && (
								<NavDropdown title='Sober Living' id='adminmenu'>

			                  <LinkContainer to='/admin/FlowerHome/1'>
									<NavDropdown.Item className="jumboH5 text-info">Flower Home</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Hassett/1'>
									<NavDropdown.Item className="jumboH5 text-info">Hassett</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Melissa/1'>
									<NavDropdown.Item className="jumboH5 text-info">Melissa</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/PalmsHouse/1'>
									<NavDropdown.Item className="jumboH5 text-info">Pamls House</NavDropdown.Item>
								</LinkContainer>

								</NavDropdown>
							)}
			              {userInfo && userInfo.isAdmin && (
								<NavDropdown title='Airbnbs' id='adminmenu'>

			                  <LinkContainer to='/admin/SnowFlower/1'>
									<NavDropdown.Item className="jumboH5 text-info">Snow Flower</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/Tropicana/1'>
									<NavDropdown.Item className="jumboH5 text-info">Tropicana</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/SirGeorge/1'>
									<NavDropdown.Item className="jumboH5 text-info">Sir George</NavDropdown.Item>
								</LinkContainer>

								</NavDropdown>
							)}
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
								<NavDropdown title="Admin" id="adminmenu">
									<LinkContainer to="/admin/productlist">
										<NavDropdown.Item>Properties</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/tenantlist">
										<NavDropdown.Item>Tenants</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>Users</NavDropdown.Item>
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