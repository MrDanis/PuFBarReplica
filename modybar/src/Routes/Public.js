import React from 'react'
import Home from '../Screens/Home'
import Authentication from '../Screens/Authentication'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const Public = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path ="/" element={<Home></Home>}></Route>
          <Route path='/Authentication/Login'element={<Authentication textOne="Forgot Password" textTwo="Create An Account" btnText="Sing In" heading='Sign Into Your Account' lead='' compType='login'></Authentication>}></Route>
          <Route path='/Authentication/Register'element={<Authentication  textOne="Forgot Password" textTwo="Create An Account" btnText="Sing Up" heading='Create your Account' laed='Join us for amazing offers, purchase management' compType='register'></Authentication>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default Public