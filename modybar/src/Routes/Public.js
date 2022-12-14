import React from 'react'
import Home from '../Screens/Home'
import Authentication from '../Screens/Authentication'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductAll from '../Screens/ProductAll'
import SpecificProduct from '../Screens/SpecificProduct'
import Hedres from '../Components/Hedres'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const Public = () => {
  
  return (
    <div>
      <Router>
        {/* <Header></Header> */}
        <Hedres></Hedres>
        <Routes>
          <Route exact path ="/" element={<Home></Home>}></Route>
          <Route path='/Authentication/Login'element={<Authentication textOne="Forgot Password" textTwo="Create An Account" btnText="Sing In" heading='Sign Into Your Account' lead='' compType='login'></Authentication>}></Route>
          <Route path='/Authentication/Register'element={<Authentication  textOne="Forgot Password" textTwo="Create An Account" btnText="Sing Up" heading='Create your Account' laed='Join us for amazing offers, purchase management' compType='register'></Authentication>}></Route>
          <Route path='/products/all'element={<ProductAll></ProductAll>}></Route>
          <Route path='/products/:id'element={<SpecificProduct></SpecificProduct>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default Public