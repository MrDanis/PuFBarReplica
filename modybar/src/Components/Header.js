import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import {FaUserAlt} from "react-icons/fa";
import HeaderCard from './HeaderCard';
const Header = () => {
    const [showMenu,setshowMenu] = useState('none');
    const showMenue =()=>{
        setshowMenu('block');
    }
    const hideMenu =()=>{
        setshowMenu('none');
    }
  return (
    <div className='conatiner-fluid m-0 position-sticky top-0 shadow'>
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid w-100 px-5 mx-5 border border-0 border-danger">
    <Link to={'/'} className="navbar-brand">
       <img className='img-fluid m-0 p-0' src='https:////cdn.shopify.com/s/files/1/0286/8071/6332/files/Puff_Logo_Black_120x.png?v=1613687976' alt=''></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse border border-0 border-success d-flex justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <Link to={'/Login'} className="nav-link active" aria-current="page" href="#"></Link>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <Link to={'/Register'} className="nav-link active" aria-current="page" href="#">Sing Up</Link>
        </li>
        <li onMouseEnter={showMenue} className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center" style={{cursor:'pointer'}}>
           Products         
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item dropdown mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul className="dropdown-menu d-none" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Over Story</a></li>
            <li><a className="dropdown-item" href="#">Goli for Good</a></li>
            <li><a className="dropdown-item" href="#">Inside the Gummy</a></li>
          </ul>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link active" aria-current="page" href="#">Wholesale/Distribution</a>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link active" aria-current="page" href="#">Store Locator</a>
        </li>
       
      </ul>
     
    </div>
        <li className="nav-item mx-4 fw-bold fs-3 p-0 my-0 d-flex align-items-center justify-content-center">
        <Link to={'/Shope'} className="btn btn-dark text-light nav-link active m-0 py-1 d-flex align-items-center justify-content-center"  aria-current="page">
          Verify
          </Link>
          <Link to={'/Shope'} className="mx-3 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <BiCart className='m-0 p-0'></BiCart>
          </Link>
          <Link to={'/Authentication/Login'} className="fs-5 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <FaUserAlt className='m-0 p-0'></FaUserAlt>
          </Link>
        </li>
  </div>
</nav>
<div onMouseLeave={hideMenu}  className='container-fluid m-0  p-2 border border-0 border-dark' style={{display:showMenu}}>
<div className='row border border-0 border-danger m-0 p-0'>
  <div className='col-3 border border-0 border-success'>
     <HeaderCard></HeaderCard>
  </div>
  <div className='col-3 border border-0 border-success'>
     <HeaderCard></HeaderCard>
  </div>
  <div className='col-3 border border-0 border-success'>
     <HeaderCard></HeaderCard>
  </div>
  <div className='col-3 border border-0 border-success'>
     <HeaderCard></HeaderCard>
  </div>
</div>
</div>
    </div>
  )
}

export default Header