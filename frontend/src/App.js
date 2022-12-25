import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import NewPasswordScreen from "./screens/NewPasswordScreen";
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import TenantListScreen from './screens/TenantListScreen'
import TenantScreen from './screens/TenantScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import TenantEditScreen from './screens/TenantEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import Header from './components/Header'
import DashBoardScreen from './screens/DashboardScreen'


import SnowFlower from './components/properties/SnowFlower'
import Tropicana from './components/properties/Tropicana'
import SirGeorge from './components/properties/SirGeorge'
import SirDavid from './components/properties/SirDavid'
import SantaAnita from './components/properties/SantaAnita'
import Sandmist from './components/properties/Sandmist'
import LivingDesert from './components/properties/LivingDesert'
import Lamont from './components/properties/Lamont'
import Hialeah from './components/properties/Hialeah'

import Flower from './components/properties/FlowerHome'
import Melissa from './components/properties/Melissa'
import Hassett from './components/properties/Hassett'
import Palms from './components/properties/PalmsHouse'



const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
       

          <Route path='/admin/SnowFlower/:pageNumber' component={SnowFlower} />
          <Route path='/admin/Tropicana/:pageNumber' component={Tropicana} />
          <Route path='/admin/SirGeorge/:pageNumber' component={SirGeorge} />
          <Route path='/admin/SirDavid/:pageNumber' component={SirDavid} />
          <Route path='/admin/SantaAnita/:pageNumber' component={SantaAnita} />
          <Route path='/admin/Sandmist/:pageNumber' component={Sandmist} />
          <Route path='/admin/LivingDesert/:pageNumber' component={LivingDesert} />
          <Route path='/admin/Lamont/:pageNumber' component={Lamont} />
          <Route path='/admin/Hialeah' component={Hialeah} />

          <Route path='/admin/FlowerHome' component={Flower} />
          <Route path='/admin/Melissa' component={Melissa} />
          <Route path='/admin/Hassett' component={Hassett} />
          <Route path='/admin/PalmsHouse' component={Palms} />





          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/reset' component={ResetPasswordScreen} />
          <Route path='/update_password/:id' component={NewPasswordScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/admin/dashboard' component={DashBoardScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/admin/productlist' component={ProductListScreen} exact />
          <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/tenant/:id' component={TenantScreen} />
          <Route path='/admin/tenant/:id/edit' component={TenantEditScreen} />
          <Route path='/admin/tenantlist/:pageNumber' component={TenantListScreen} exact />
          <Route path='/admin/tenantlist' component={TenantListScreen} exact />

          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/' component={HomeScreen} exact />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />

       
      </main>
      
      <Footer />
    </Router>
  )
}

export default App
