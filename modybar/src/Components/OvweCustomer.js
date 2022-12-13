import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'

const OvweCustomer = () => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center m-0 p-0'>
        <div className='row m-0 p-0'>
             <h1 className='text-center fw-bold'>Our Customers Love Us!</h1>
        </div>
        <div class="row w-75 g-2 d-flex justify-content-around">
            <div class="col-12 col-md-4">
              <div class="p-3">
                {/*is ko baad main component bnana hai  */}
                 <div className='container-fluid m-0 p-0 border border-0 border-success shadow'>
                     <div className='row m-0 p-0'>
                         <div className='col-12 mt-5 mb-3 d-flex align-items-center justify-content-center'>
                             <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> 
                         </div>
                         <div className='col-12 mb-3 d-flex flex-column align-items-center justify-content-center'>
                             <p className='mb-5 w-75 text-justify fw-normal'>Received them fast, I’m definitely buying more soon!!</p>
                             <img className='img-fluid m-0 p-0' src='./PerSon1.png' alt=''></img>
                             <span className='fw-bold fs-6 mb-1'>Julie Griffin</span>
                             <small className=''>Verified User</small>
                         </div>
                     </div>
                 </div>
                  {/*is ko baad main component bnana hai  */}
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="p-3">
                {/*is ko baad main component bnana hai  */}
                <div className='container-fluid m-0 p-0 border border-0 border-success shadow'>
                     <div className='row m-0 p-0'>
                         <div className='col-12 mt-5 mb-3 d-flex align-items-center justify-content-center'>
                             <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> 
                         </div>
                         <div className='col-12 mb-3 d-flex flex-column align-items-center justify-content-center'>
                             <p className='mb-5 w-75 text-justify fw-normal'>Received them fast, I’m definitely buying more soon!!</p>
                             <img className='img-fluid m-0 p-0' src='./PerSon1.png' alt=''></img>
                             <span className='fw-bold fs-6 mb-1'>Julie Griffin</span>
                             <small className=''>Verified User</small>
                         </div>
                     </div>
                 </div>
                  {/*is ko baad main component bnana hai  */}
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="p-3">
                {/*is ko baad main component bnana hai  */}
                <div className='container-fluid m-0 p-0 border border-0 border-success shadow'>
                     <div className='row m-0 p-0'>
                         <div className='col-12 mt-5 mb-3 d-flex align-items-center justify-content-center'>
                             <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> 
                         </div>
                         <div className='col-12 mb-3 d-flex flex-column align-items-center justify-content-center'>
                             <p className='mb-5 w-75 text-justify fw-normal'>Received them fast, I’m definitely buying more soon!!</p>
                             <img className='img-fluid m-0 p-0' src='./PerSon1.png' alt=''></img>
                             <span className='fw-bold fs-6 mb-1'>Julie Griffin</span>
                             <small className=''>Verified User</small>
                         </div>
                     </div>
                 </div>
                  {/*is ko baad main component bnana hai  */}
              </div>
            </div>
        </div>
        <div className='row mt-5 w-75 border border-0 border-success'>
           <div className='col-12 col-md-3'>
                  <img className='img-fluid m-0 p-0 ' src='./Satisfy1.png' alt='test'></img>
           </div>
           <div className='col-12 col-md-6 border border-0 border-success'>
                 <div className='row-75 m-0 p-0 border border-0 border-danger'>
                   <div className='col-10'>
                    <h1 className='fw-bold mb-3'>Smooth, Satisfying, Simple.</h1>
                    <p className='fw-bold mb-3'>Moody Bar products are disposable, one-step systems, meaning they’re always ready when you are: no recharging, refilling, or maintenance required. When it comes to quality, we do the heavy lifting — so all that’s left for you to do is enjoy.</p>
                    <button className='btn p-2  fw-bold text-light' style={{backgroundColor:'#000'}}>
                    <Link className='text-light' to='/products/all'>
                    Shop All Moody Bar Device
        </Link>
                      </button>  
                   </div>
                 </div>
           </div>
           <div className='col-12 col-md-3'>
           <img className='img-fluid m-0 p-0 ' src='./Satisfy2.png' alt='test'></img>
           </div>
        </div>
    </div>
  )
}

export default OvweCustomer