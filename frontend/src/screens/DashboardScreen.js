import React from 'react'
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { LinkContainer } from 'react-router-bootstrap'
import "../screens/css/dashboard.css"

const DashboardScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <Container fluid>
        <Row>
            <Col md={2} className="dashboard_col left_dash_col">
                <h1 className='text-center'>Admin Panel</h1>
            <Nav className="me-auto" id="first_nav">
            <LinkContainer to="/productlist">
              <Navbar.Brand className="admin_panel_link">Properties</Navbar.Brand>
            </LinkContainer>
            <LinkContainer  title={userInfo.name} to="/profile">
              <Navbar.Brand className="admin_panel_link">Profile</Navbar.Brand>
            </LinkContainer>
          </Nav>
            </Col>
            <Col md={10} className=" dashboard_col right_dash_col text-center">Right Col</Col>
        </Row>
      </Container>
    
    </>
  )
}

export default DashboardScreen