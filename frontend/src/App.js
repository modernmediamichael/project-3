import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import ShopScreen from './screens/ShopScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import StoreLocatorScreen from './screens/StoreLocatorScreen'
import CreateProductScreen from './screens/CreateProductScreen'
import WishListScreen from './screens/WishListScreen'
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <main className='py-3'>
        <Container>
          <Route path='/shop' component={ShopScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/store-locator' component={StoreLocatorScreen} exact/>
          <Route path='/create-product' component={CreateProductScreen} exact/>
          {/* <Route path='/wishlist' component={WishListScreen} exact/> */}
          <Route path='/login' component={LoginScreen} exact/> 
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;