import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ShopScreen from '../screens/ShopScreen'
import ProductScreen from '../screens/ProductScreen'
import LoginScreen from '../screens/LoginScreen'
import StoreLocatorScreen from '../screens/StoreLocatorScreen'
import WishListScreen from '../screens/WishListScreen'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PublicRoutes() {
  return (
    <Router>

      <main className='py-3'>
        <Header />
        <Hero />  
        <Switch>
 
          <Route path='/shop' component={ShopScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/store-locator' component={StoreLocatorScreen} exact/>
          <Route path='/wishlist' component={WishListScreen} exact/>
          <Route path='/login' component={LoginScreen} exact/> 
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default PublicRoutes;
