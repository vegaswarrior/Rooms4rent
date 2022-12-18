import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import {Container, Row, Col} from 'react-bootstrap'
import '../screens/css/login.css'
import Dog from '../screens/images/dog2.png'
import Logo from '../components/img/WarriorLogo3.png'
import Header from '../components/Header'

const LoginScreen2 = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
  
    const redirect = location.search ? location.search.split('=')[1] : '/'
  
    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }
  return (
    <>
    <Header />
      <Container>
        <Row>
            <Col className='left_col'>
               <h1 className='text-center'>Welcome Back, Friend</h1>
                <img src={Dog} alt="" />
            </Col>
            <Col className='right_col'>
                <h1 className='text-center'>Please, Sign In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                 {loading && <Loader />}
                    <div className="container h-100" onSubmit={submitHandler}>
                    <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                            <img src={Logo} className="brand_logo" alt="Logo" />
                            </div>
                        </div>
                            <div className="d-flex justify-content-center form_container">
                                <form >
                                <div className="input-group mb-3">
                                <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                    <input type="text" className="form-control input_user" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input  className="form-control input_pass" id="password"  placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                
                                </div>
                                <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Remember Password</label>
                                </div>
                                </div>
                                </form>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="submit" className="btn login_btn">Login</button>
                            </div>
                            <div className="mt-4">
                            
                            <div className="d-flex justify-content-center links">
                            Don't have an account? 
                            <Link to="/register">
                                 Sign Up
                            </Link>
                            
                            </div>
                            <div className="d-flex justify-content-center links">
                            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                               Forgot Password
                            </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>


            </Col>
        </Row>
      </Container>


  </>
  )
}

export default LoginScreen2