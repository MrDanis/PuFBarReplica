import React,{useState,useContext} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";
import '../App.css'
import Logo from "../Assets/LogoBlack.png"
import { ProductContex } from '../ContextStore';
import { BsPower,BsWindows,BsFillPersonFill,BsFillLayersFill } from "react-icons/bs";
const Hedres = () => {
  const {cartItems,billAmount,dispatcchUserEvents} = useContext(ProductContex);
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
    const quantityCheckANdAdjustIncrease =(data,incrementer,index)=>{
          if(incrementer>data.qty)
          {
            alert('Products is out of stock');
          }
          if((incrementer<=data.qty)&&(incrementer>0))
          {
            console.log('Index of the item is : ',index,'Incremented value is : ',(data.price_Offered*incrementer));
            dispatcchUserEvents("INCREASE_QTY",{itemIndex:index,updatedAmount:(data.price_Offered*incrementer)})
            // Additional bill amount and item should be pass to increase the quantity
            alert('increase the quantity')
          }     
    }
    const quantityCheckANdAdjustDecrease =(data,incrementer,index)=>{
          if(incrementer>data.qty)
          {
            alert('Products is out of stock');
          }
          if((incrementer<=data.qty)&&(incrementer>0))
          {
            console.log('Index of the item is : ',index,'Incremented value is : ',(data.price_Offered*incrementer));
            dispatcchUserEvents("DECREASE_QTY",{itemIndex:index,updatedAmount:(data.price_Offered*incrementer)})
            // Additional bill amount and item should be pass to increase the quantity
            alert('Decreasing the quantity')
          }     
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
        <li className="nav-item fw-bold fs-3 p-0 my-0 d-flex align-items-center justify-content-center">
          <Link to={'#'} className="mx-5 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <a className="btn m-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
           <BiCart className='m-0 p-0 fs-4'></BiCart>
          </a>

             <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
               <div className="d-flex align-items-center justify-content-center flex-row flex-wrap offcanvas-header bg-light shadow">
                <div className='m-0 p-0 w-75 d-flex align-items-center justify-content-center'>
                 <h5 className='mx-3 text-center text-uppercase border border-0 border-success d-flex'  id="offcanvasRightLabel">
                   Your Cart
                 </h5>
                </div>
                <div className='m-0 p-0 w-25 d-flex align-items-center justify-content-center'>
                 <button type="button" className="fs-6 m-0 p-0 btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
               </div>
               <div className="offcanvas-body border border-0 border-danger">
                {/* Cart Body Start */}

                {
                  cartItems?.length===0?<h4 className='d-flex align-items-center justify-content-center'>Your Cart is Empty</h4>:
                  cartItems?.map((item,index)=>{return(
                 <div className='d-flex flex-wrap flex-row border border-2 border-success' key={index}>
                    <img  className='w-25 img-fluid m-0 p-2 shadow' src='/CustopmCardImage.png' alt='text' style={{width:'100px',height:'100px'}}></img>
                    <p className='px-3 w-75 d-flex flex-row border border-0 border-success'>
                      <p className='w-50 mt-1 mb-0 border border-0 border-danger' style={{fontSize:'12px'}}>{item.name}
                         <p className='mt-2 border border-0 border-success d-flex flex-wrap mb-0 fs-6'>
                            <span onClick={()=>{quantityCheckANdAdjustDecrease(item,item.requestedQuantity-1,index)}} className='d-flex align-items-center justify-content-center border border-1 w-25 p-1' style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
                               -
                            </span>
                            <span  className='d-flex align-items-center justify-content-center border border-1 w-25 p-1'>
                              {item.requestedQuantity}
                            </span>
                            <span onClick={()=>{quantityCheckANdAdjustIncrease(item,item.requestedQuantity+1,index)}}  className='d-flex align-items-center justify-content-center border border-1 w-25 p-1' style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
                               +
                            </span>
                         </p>
                      </p>  
                      <p className='position-relative w-50 m-0 p-0 border border-0 border-dark fs-6 d-flex align-items-center justify-content-center'>
                        <span className='position-absolute start-0 bottom-25 mt-4 fs-4'>
                          <small className='mx-2'>
                           $ {item.requestedQuantity*item.price_Offered}
                          </small>
                           <AiFillDelete onClick={()=>{dispatcchUserEvents("REMOVE_FROM_CART",{data:item,deductedAmount:item.requestedQuantity*item.price_Offered})}}></AiFillDelete>
                          </span>
                       
                      </p>
                    </p>
                 </div>
                  )})
                }
                 <div className='d-flex flex-wrap flex-row border border-2 border-success d-none'>
                    <img  className='w-25 img-fluid m-0 p-2 shadow' src='/CustopmCardImage.png' alt='text' style={{width:'100px',height:'100px'}}></img>
                    <p className='px-3 w-75 d-flex flex-row border border-0 border-success'>
                      <p className='w-50 mb-0 border border-0 border-danger fs-5'>Aole Grape
                         <p className='mt-2 border border-0 border-success d-flex flex-wrap mb-0 fs-6'>
                            <span onClick={()=>{alert('Subtract Quantity')}} className='d-flex align-items-center justify-content-center border border-1 w-25 p-1' style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
                               -
                            </span>
                            <span  className='d-flex align-items-center justify-content-center border border-1 w-25 p-1'>
                              10
                            </span>
                            <span onClick={()=>{alert('test')}}  className='d-flex align-items-center justify-content-center border border-1 w-25 p-1' style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
                               +
                            </span>
                         </p>
                      </p>  
                      <p className='position-relative w-50 m-0 p-0 border border-0 border-dark fs-6 d-flex align-items-center justify-content-center'>
                        <span className='position-absolute start-0 bottom-25 mt-4 fs-4'>
                          <small className='mx-2'>
                           $ 20.00
                          </small>
                           <AiFillDelete></AiFillDelete>
                          </span>
                       
                      </p>
                    </p>
                 </div>
                {/* Cart Body End */}
                {/* Cart Footer */}
                 <div className='w-100 m-0 p-3 border border-0 border-success position-absolute bottom-0 start-0'>
                   <p className='d-flex align-items-center justify-content-between m-0 p-2 border border-0 borde-success'>
                    <span className='m-0 p-0 fs-6 text-start fw-normal'>Subtotal</span>
                    <span className='m-0 p-0 fs-6 text-end fw-bold'>$ {billAmount}</span>
                   </p>
                   <buttton className="btn w-100 text-light fs-5" style={{backgroundColor:'#000000'}}>Check Out</buttton>
                 </div>
               </div>
             </div>
          </Link>
          <Link to={'/Authentication/Login'} className="fs-5 text-dark nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <FaUserAlt className='m-0 p-0'></FaUserAlt>
          </Link>
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