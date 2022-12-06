import React from 'react'
import S1 from '../Assets/SP1.svg'
import S2 from '../Assets/SP2.svg'
import S3 from '../Assets/SP3.svg'
import S4 from '../Assets/SP4.svg'
const SpecificProduct = () => {
  return (
    <div className='container-fluid m-0 p-0 d-flex align-items-center justify-content-center'>
     <div className='row mt-5 m-0 pt-5 p-0 w-75'>
       <div className='col-12 col-md-6 d-flex align-items-center justify-content-center border border-0 border-danger'>
       <img className='img-fluid m-0 p-0' src='/Satisfy2.png' alt='test'></img>
       </div>
       <div className='col-12 col-md-6 mb-5 d-flex flex-column align-items-start'>
        <h1 className='fw-bold fs-1 mb-2'>Lush</h1>
        <h3 className='fw-bold fs-2 mb-2'>Puff Bar</h3>
        <h5 className='fw-bold fs-3 mb-5'>$ 20.00</h5>
        <p className='mb-1 fw-bold'>Puff Count:<span>500 Puffs</span></p>
        <p className='mb-1 fw-bold'>Juice Capacity: <span className='fw-normal'>1.8 mL (0.06 fl oz.)</span></p>
        <p className='mb-1 fw-bold'>Nicotine Strength: <span className='fw-normal'>5% Tobacco Free Nicotine</span> </p>
        <p className='mb-5 fw-bold'>Battery: <span className='fw-normal'>350 mAh Battery</span></p>
        <p className='mb-1 fw-bold'><span className='fs-6 fw-bold'>Quantity</span> <input className='p-1 w-25 mx-1 border-1 bg-light' placeholder='0' type='number' style={{borderRadius:'10px'}}></input></p>
         <button className='btn btn-dark text-light w-100 mt-3'>Sold Out</button>
        <div className='row w-100 m-0 p-0 g-2 border border-0 border-success'>
            <div className="col-12 col-md-6 col-lg-3">
               <div className="p-3 border-0">
                <img className='img-fluid m-0 p-0' src={S1} alt='test'></img>
                <p className='mt-1 mb-1 fw-bold'>Pre filled 1.8 ml</p>
                <p className='mb-1 fw-bold'>Salt</p>
                <p className='mb-1 fw-bold'>Nic</p>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border-0">
              <img className='img-fluid m-0 p-0' src={S2} alt='test'></img>
              <p className='mt-1 mb-1 fw-bold'>Internal</p>
              <p className='mt-1 mb-1 fw-bold'>Battery</p>
              <p className='mt-1 mb-1 fw-bold'>350mAh</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border-0">
              <img className='img-fluid m-0 p-0' src={S3} alt='test'></img>
              <p className='mt-1 mb-1 fw-bold'>5% Salt Nicotine</p>
              <p className='mt-1 mb-1 fw-bold'>for a smooth</p>
              <p className='mt-1 mb-1 fw-bold'>draw</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border-0">
              <img className='img-fluid m-0 p-0' src={S4} alt='test'></img>
              <p className='mt-1 mb-1 fw-bold'>Compact</p>
              <p className='mt-1 mb-1 fw-bold'>and Convenient</p>
              </div>
            </div> 
        </div>
       </div>

       <div className='col-12 col-md-6 mt-5 m-0 p-0 border border-0 border-danger d-flex flex-column align-items-start justify-content-center'>
        <h1 className='text-start'>The Puff Bar</h1>
        <p className='fw-bold'>New & improved. Puff Bar now delivers up to 500 satisfyingly smooth puffs. No refills or recharges required.</p>
       </div>
       <div className='col-12 col-md-6 mt-5 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-primary'>
             <img className='img-fluid m-0 p-0' src='/Satisfy1.png' alt='test'></img>
       </div>
       <div className='col-12 m-0 p-0 d-flex flex-column align-items-center justify-content-center'>
        <div className='row m-0 p-0 w-75 d-flex align-items-center justify-content-center'>
          <h1 className='text-center fw-bold mt-5 mb-5'>
             What's In Your Puff Bar
          </h1>
        </div>
          <div className='row m-0 p-0 w-75 border border-0 border-danger gx-5'>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center justify-content-center p-3 border-0 rounded shadow bg-light">
                <p className='fs-6 mb-0 fw-normal text-center'>PUFFS</p>
                <p className='fs-5 mb-0 fw-bold'>~ 500</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-center p-3 border-0 shadow bg-light">
                <p className='fs-6 mb-0 fw-normal text-center'>NICOTINE</p>
                <p className='fs-5 mb-0 fw-bold'>5%</p>
            </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-center p-3 border-0 shadow bg-light">
                <p className='fs-6 mb-0 fw-normal text-center'>BATTERY</p>
                <p className='fs-5 mb-0 fw-bold'>350mAh</p>
            </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-center p-3 border-0 shadow bg-light">
                <p className='fs-6 mb-0 fw-normal text-center'>LIQUID</p>
                <p className='fs-5 mb-0 fw-bold'>1.8ml</p>
            </div>
            </div>
          </div>
       </div>
     </div>
    </div>
  )
}

export default SpecificProduct