import React from 'react'
import '../components/sass/main.scss'
import logo from '../components/img/WarriorLogo3.png'
import { Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from "./Avatar";
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


const Hero = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const logoutHandler = () => {
      dispatch(logout())
    }
        

  return (
    <>

    <header className="header">
    
    <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
    </div>

    <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">Dreaming</span>
            <span className="heading-primary--sub">Where Websites Begin</span>
        </h1>

		<a href="/contact" className="btn btn--white btn--animated">Contact Me</a>

    </div>
    
    <div className="navigation ">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button mt-5">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>01</span>Home</a></li>
                    <li className="navigation__item"><a href="/about" className="navigation__link"><span>02</span>About</a></li>
                    <li className="navigation__item"><a href="/pricing" className="navigation__link"><span>03</span>Pricing</a></li>
                    <li className="navigation__item"><a href="/blog" className="navigation__link"><span>04</span>Blog</a></li>
                    <li className="navigation__item"><a href="/contact" className="navigation__link"><span>05</span>Contact Me</a></li>
                    </ul>
            </nav>
		</div>

</header>
<div className='login_button'>
<Navbar >
        <Container>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
  
            <Nav className='ml-auto'>

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
									<Nav.Link>
										<span id='sign_in'>Sign In</span>
									</Nav.Link>
								</LinkContainer>
							)}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
         
</div>
</>
  )
}

export default Hero