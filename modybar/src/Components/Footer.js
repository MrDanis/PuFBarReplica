import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { DiJava } from 'react-icons/di';
import { GiUsaFlag } from 'react-icons/gi';
import { GiTensionSnowflake } from 'react-icons/gi';
const Footer = () => {
  return (
    <div className='container-fluid m-0 p-0 d-flex flex-column align-items-center justify-content-center'>
       <div className='row mb-3 mt-5 w-75 border border-0 border-success'>
           <div className='col-12 mt-4'>
            <h1 className='text-center fw-bold text-dark'>We've got you covered</h1>       
           </div>  
           <div className='col-3 mt-4'>
        
           <p className='text-center d-flex align-items-center fs-5 fw-bold text-dark'><TbTruckDelivery className='mx-1 fs-1'></TbTruckDelivery>Fast Delivery</p>          
           </div> 
           <div className='col-3 mt-4'>
           <p className='text-center d-flex align-items-center fs-5 fw-bold text-dark'><DiJava className='mx-1 fs-1'></DiJava>Authentic Taste</p>       
           </div> 
           <div className='col-3 mt-4'>
           <p className='text-center d-flex align-items-center fs-5 fw-bold text-dark'><GiUsaFlag className='mx-1 fs-1'></GiUsaFlag>Designed in the US</p>          
           </div> 
           <div className='col-3 mt-4'>
           <p className='text-center d-flex align-items-center fs-5 fw-bold text-dark'><GiTensionSnowflake className='mx-1 fs-1'></GiTensionSnowflake>Tobacco-Free Nicotine</p>       
           </div> 
        </div>
        <div className='row w-100 py-5 d-flex justify-content-center m-0 p-0 border border-0 border-danger' style={{backGroundColor:'#e9e9e9'}}>
            <div className='row w-75 m-0 p-0 border border-0 border-dark d-flex justify-content-evenly'>
             <div className='col-2'>
                  <h3 className='mb-4 fs-4'>Support</h3>
                  <p className='mb-1 text-secondary fs-6'>Contact Us</p>
                  <p className='mb-1 text-secondary fs-6'>Shipping Information</p>
                  <p className='mb-1 text-secondary fs-6'>Returns & Exchanges</p>
                  <p className='mb-1 text-secondary fs-6'>Verify Device</p>
                  <p className='mb-1 text-secondary fs-6'>Product Warranty</p>
             </div>
             <div className='col-2'>
                  <h3 className='mb-4 fs-4'>Support</h3>
                  <p className='mb-1 text-secondary fs-6'>Contact Us</p>
                  <p className='mb-1 text-secondary fs-6'>Shipping Information</p>
                  <p className='mb-1 text-secondary fs-6'>Returns & Exchanges</p>
                  <p className='mb-1 text-secondary fs-6'>Verify Device</p>
                  <p className='mb-1 text-secondary fs-6'>Product Warranty</p>
             </div>
             <div className='col-2'>
                  <h3 className='mb-4 fs-4'>Support</h3>
                  <p className='mb-1 text-secondary fs-6'>Contact Us</p>
                  <p className='mb-1 text-secondary fs-6'>Shipping Information</p>
                  <p className='mb-1 text-secondary fs-6'>Returns & Exchanges</p>
                  <p className='mb-1 text-secondary fs-6'>Verify Device</p>
                  <p className='mb-1 text-secondary fs-6'>Product Warranty</p>
             </div>
             <div className='col-4'>
                  <h3 className='mb-4 fs-4'>Subscribe to the Newsletter</h3>
                  <p className='mb-1 text-secondary fs-6 d-flex aligh-items-center'>
                    <input placeholder='email' className='p-2 mx-1 bg-light shadow border-0 rounded'></input>
                    <button className='btn text-white mx-1' style={{backgroundColor:'#000'}}>Subscribe</button>
                  </p>
             </div>
             <div className='col-12 pt-5 px-5'>
                 
                  <p className='mx-1 mb-3 text-dark fs-6 d-flex aligh-items-center' style={{fontWeight:500}}>
                  ENDS (Electronic Nicotine Delivery System) products containing nicotine are not available for sale in the U.S.A
                  </p>
                  <p className='mx-1 mb-3 text-dark fs-6 d-flex aligh-items-center' style={{fontWeight:500}}>
                  ADDRESS: 251 Little Falls Dr, Wilmington, DE 19807
                  </p>
                  <p className='mx-1 mb-3 text-dark fs-6 d-flex aligh-items-center' style={{fontWeight:500}}>
                  WARNING: Puff Bar products are not intended to diagnose, treat, cure, or prevent any disease, condition, or disorder and are not smoking cessation or nicotine replacement therapy products. The FDA has not reviewed these products, nor has it evaluated their safety or any of the statements made regarding these products. Puff Bar products contain nicotine, which is a highly addictive substance, and are intended to be used only by adults at least 21 years of age who use combustible cigarettes or other tobacco or nicotine vaping products. Do not use Puff Bar products if you are pregnant or nursing, if you have heart disease, high blood pressure, diabetes, ulcers, liver or kidney disease, throat disease, asthma, or difficulty breathing. Do not use Puff Bar products if you are taking theophylline, ropinirole, or clozapine. As with other nicotine products, use of Puff Bar products can increase your heart rate and blood pressure and may cause nausea or dizziness or aggravate existing respiratory conditions. Use of Puff Bar products may expose you to certain chemicals identified as harmful and/or carcinogenic, including aldehydes, volatile organic compounds, and metals.
                  </p>
                  <p className='mx-1 mb-3 text-dark fs-6 d-flex aligh-items-center' style={{fontWeight:500}}>
                  WARNING: Puff Bar products can expose you to chemicals including glycidol, which is known to the States of California to cause cancer, and nicotine, which is known to the State of California to cause birth defects or other reproductive harm. For more information, go to www.P65Warnings.ca.gov.
                  </p>
                  <p className='text-center' style={{fontWeight:500}}>
                   © Copyright 2021 - Puff Bar | All Rights Reserved
                  </p>
             </div>
               
            </div>
        </div>
    </div>
  )
}

export default Footer