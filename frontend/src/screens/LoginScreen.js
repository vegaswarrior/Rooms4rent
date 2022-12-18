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
    <div className="container">
        <div className="row">
          <div className="col left_col">
            <h1 className='text-center mb-5'>Welcome Back, Friend</h1>
            <img src={Dog} alt="Dog Waving Hello" id="dog_img"/>
          </div>
          <div className="col right_col">
            <h1 className='text-center mb-5'>Please Sign In</h1>
               <div className="container h-100"  >
                  <div className="d-flex justify-content-center h-100">
                  <div className="user_card">
                  <div className="d-flex justify-content-center">
                  <div className="brand_logo_container">
                    <img src={"https://webdevtrick.com/wp-content/uploads/logo-fb.png"} className="brand_logo" alt="Logo" />
                  </div>
                  </div>
                  <div className="d-flex justify-content-center form_container">
                      <form onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                        <div className="input-group-append">
                         <span className="input-group-text"><i className="fas fa-user mobile_font_size"></i></span>
                        </div>
                          <input className="form-control input_user mobile_font_size" type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                       </div>
                       <div className="input-group mb-2">
                         <div className="input-group-append">
                          <span className="input-group-text"><i className="fas fa-key mobile_font_size"></i></span>
                         </div>
                         <input className="form-control input_pass mobile_font_size"  type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                         {/* <img src={visibilityIcon} alt='show password' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} /> */}
                       </div>
                       <div className="form-group">
                         <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customControlInline" />
                          <label className="custom-control-label mobile_font_size" for="customControlInline">Remember Password</label>
                         </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                          <button type="submit" className="btn login_btn mobile_font_size">Login</button>
                       </div>
                      </form>
                  </div>

                  <div className="mt-4">
                    
                  <div className="d-flex justify-content-center links mobile_font_size">
                     Don't have an account? 
                     <Link to="/register">
                        Sign Up
                     </Link>
                     
                  </div>
                  <div className="d-flex justify-content-center links mobile_font_size">
                   <Link to="/forgotpassword">
                      Forgot your password?
                   </Link>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
            </div>
        </div>
      </div>

  </>
  )
}

export default LoginScreen2