import React from 'react'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const ExplainationTabs = () => {
  return (
    <div className='container-fluid mt-5 m-0 p-0 w-100'>
     <div className='row border border-0 border-success m-0 p-0'>
       <div className='col-6 m-0 p-0 d-flex flex-column align-items-center justify-content-center'>
       <h6 className='d-flex flex-wrap'>MOODY BAR</h6>
        <p className='mb-0'>6000 Puffs</p>
        <p>20 Flavours</p>
        <button className='btn text-align-bottom' style={{backgroundColor:'#000',color:'white'}}>
        <Link className='text-light' to='/products/all'>
        Shop Now
        </Link>
          </button>
       </div>
       <div className='col-6 m-0 p-0'>
          <img className='img-fluid m-0 p-0' src='./ExplainImage.png' alt='test'></img>
       </div>
     </div> 
   </div>
  )
}

export default ExplainationTabs