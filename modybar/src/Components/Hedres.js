import React,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import {FaUserAlt} from "react-icons/fa";
import '../App.css'
import Logo from "../Assets/LogoBlack.png"
import { BsPower,BsWindows,BsFillPersonFill,BsFillLayersFill } from "react-icons/bs";
const Hedres = () => {
    const [isHumbergerVisible,setisHumbergerVisible]= useState('visible');
    const navigate = useNavigate();
    const goToProduct =()=>{
      
        navigate('/products/all')
    }
    const goToHome =()=>{
        setisHumbergerVisible('hidden');
        navigate('/')
    }
    const goToCart =()=>{
        setisHumbergerVisible('hidden');
        navigate('/products/all')
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0 py-3 shadow" style={{zIndex:'100'}}>
    <div className="container-fluid mainHeaderBox border border-0 border-success px-5 mx-5">
    <Link to={'/'} className="navbar-brand d-none d-md-block">
       {/* <img className='img-fluid m-0 p-0 titleTag' src='https:////cdn.shopify.com/s/files/1/0286/8071/6332/files/Puff_Logo_Black_120x.png?v=1613687976' alt=''></img> */}
       <img className='img-fluid m-0 p-0 titleTag' src={Logo} height={90} width={90} alt=''></img>
    
    </Link>
    <button className="btn d-block d-md-none shadow border border-0 border-danger" onClick={()=>{setisHumbergerVisible('hidden')}} style={{visibility:isHumbergerVisible}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav  mb-2 mb-lg-0 d-none d-md-inline-flex flex-row border border-0 border-success" style={{cursor:'pointer'}}>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <Link to={'/Login'} className="nav-link active" aria-current="page" href="#">Login</Link>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <Link to={'/Register'} className="nav-link active" aria-current="page" href="#">Sing Up</Link>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li onClick={goToProduct} className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center" style={{cursor:'pointer'}}>
           Products         
        </li>
        <li className="nav-item mx-4 fw-bold fs-3 p-0 my-0 d-flex align-items-center justify-content-center">
        <Link to={'/Shope'} className="btn btn-dark text-light nav-link active m-0 py-1 d-flex align-items-center justify-content-center"  aria-current="page">
          Verify
          </Link>
          <Link to={'/Shope'} className="mx-5 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <BiCart className='m-0 p-0'></BiCart>
          </Link>
          <Link to={'/Authentication/Login'} className="fs-5 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <FaUserAlt className='m-0 p-0'></FaUserAlt>
          </Link>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item dropdown mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul className="dropdown-menu d-none" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Over Story</a></li>
            <li><a className="dropdown-item" href="#">Goli for Good</a></li>
            <li><a className="dropdown-item" href="#">Inside the Gummy</a></li>
          </ul>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <a className="nav-link active" aria-current="page" href="#">Wholesale/Distribution</a>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
          <a className="nav-link active" aria-current="page" href="#">Store Locator</a>
        </li>
    </ul>
     {/*User menu in mobile*/}
     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 <div className="offcanvas-header">
   <h5 className="offcanvas-title" id="offcanvasExampleLabel">
  
   </h5>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}} ></button>
 </div>
 <div className="offcanvas-body">
 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item mx-4 mb-5 fw-bold d-flex align-items-center justify-content-center">
    {/* <img className='img-fluid m-0 p-0 titleTag' src='https:////cdn.shopify.com/s/files/1/0286/8071/6332/files/Puff_Logo_Black_120x.png?v=1613687976' alt=''></img> */}
    <img className='img-fluid m-0 p-0' src={Logo} height={100} width={100} alt=''></img>
   
    </li>
    {/* <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close" onClick={goToHome} >
      <Link  to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
    </li> */}
    <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
          <Link to={'/'} className="nav-link active">
            Home
          </Link>
    </li>
    <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
       <Link to={'/products/all'} className="nav-link active">
         Products
       </Link>
    </li>
    <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
       <Link to={'/products/all'} className="nav-link active">
         Cart
       </Link>
    </li>
    <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{setisHumbergerVisible('visible')}}>
       <Link to={'/Authentication/Login'} className="nav-link active">
          Login
       </Link>
    </li>
    
    <li className="nav-item mb-3 mx-4 fw-bold d-flex align-items-center justify-content-center d-none">
        {/* agr user login na hua to login wala link hona warna logout wala a jay ag is ki jaga */}
      <Link to={'/Authentication/Login'} className="nav-link active" aria-current="page" href="#">Login</Link>
    </li>
  </ul>
 </div>
</div>
    </div>
  </nav>
  )
}

export default Hedres