import React from 'react'
import 'antd/dist/antd.css';
import CommonCustomCard from './CommonComponent/CommonCustomCard';
import { Link } from 'react-router-dom';
const ExplainationTabs = () => {
  return (
    <div className='container-fluid mt-5 m-0 p-0 w-100'>
      {/* <CommonCustomCard explainImage='./ExplainImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='MOODY BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-50 m-0 px-2 py-4 border border-0 border-success d-flex flex-column justify-content-center align-items-center order-1' childTwoClass=' order-2 w-50 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard> */}
     <div className='row border border-0 border-success m-0 p-0'>
       <div className='col-6 m-0 p-0 d-flex flex-column align-items-center justify-content-center'>
       <h6 className='d-flex flex-wrap'>MOODY BAR</h6>
        <p className='mb-0'>500 Puffs</p>
        <p>17 Flavours</p>
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