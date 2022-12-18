import React from 'react'
import '../components/sass/main.scss'
import logo from '../components/img/WarriorLogo3.png'
import { Nav, NavDropdown, Navbar, Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from "./Avatar";
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import Black from '../components/img/black.png'
import Syrup from '../components/img/syrupScreenShot.png'


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

		  <a  className="button1 button1--white button1--animated" data-bs-toggle="modal" data-bs-target="#exampleModal">Latest Work</a>

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
                    <li className="navigation__item"><a href="/producthomescreen" className="navigation__link"><span>03</span>Products</a></li>
                    <li className="navigation__item"><a href="/blog" className="navigation__link"><span>04</span>Blog</a></li>
                    <li className="navigation__item"><a href="/contact" className="navigation__link"><span>05</span>Contact Me</a></li>
                    </ul>
            </nav>
		</div>

</header>

       <Navbar id='navbar1'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
			{userInfo ? (
								<div className="d-flex justify-content-start ms-lg-5">
									<Avatar size="30px" url={userInfo.avatar} className="" />
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



  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      {/* <div className="modal-header">
        <h5 className="modal-title text-center" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div> */}
      <div className="modal-body">
      
      <div className="card " id='cardCard1'>
      <img src={Black} className="card-img-top" alt="..." />
      <div className="card-body">
        <h1 className="card-title text-center">Black Cat Macrame</h1>
        <p className="card-text">This website is an E-Commerce Website for selling Handmade Crafted Macrame Jewerly from Turkey.</p>
        <a href="https://www.blackcatmacrame.com" className="btn btn-primary modal_button">Check Out Site</a>
      </div>
      </div>

     
      <div className="card" id='cardCard2'>
      <img src={Syrup} className="card-img-top" alt="..." />
      <div className="card-body">
        <h1 className="card-title text-center">Syruptopia</h1>
        <p className="card-text text-center">This is a E-Commerce Website for Flavored Maple Syrup that Uses the MERN Stack</p>
        <a href="https://www.syruptopia.com" className="btn btn-primary modal_button2" >Check Out Site</a>
      </div>
      </div>
   



    </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



</>
  )
}

export default Hero