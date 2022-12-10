import React from 'react'
const NewsAndUpdates = (props) => {
  return (
    <div className='container-fluid mt-5 m-0 p-0 w-100'>
    <div className='row mt-5 m-0 p-0'>
         <div className='col-12 mt-3 m-0 p-0 d-flex align-items-center justify-content-center'>
               <h1 className='mb-3'>{props.heading}</h1>
         </div>
    </div>
     <div className='row d-flex justify-content-center border border-0 border-success m-0 p-0 g-2'>
     <div className='row w-75 d-flex justify-content-around m-0 p-0 border border-0 border-dark'>
     <div class="col-12 col-md-4 mb-3 border border-0 border-danger">
      <div class="p-3 d-flex flex-column align-items-center justify-content-center border bg-light border border-0 border-success shadow">
        <img className='container-fluid mb-3 m-0 p-0' src='./NewCard1.png' alt='test'></img>
        <h1 className='text-center fw-bold fs-2'>ARE MOODY BARS BANNED?</h1>
      </div>
    </div>
    <div class="col-12 col-md-4 mb-3 border border-0 border-danger">
    <div class="p-3 d-flex flex-column align-items-center justify-content-center border bg-light border border-0 border-success shadow">
        <img className='container-fluid mb-3 m-0 p-0' src='./NewCard2.png' alt='test'></img>
        <h1 className='text-center fw-bold fs-2'>ARE MOODY BARS BANNED?</h1>
    </div>
    </div>
    <div class="col-12 col-md-4 mb-3 border border-0 border-danger">
    <div class="p-3 d-flex flex-column align-items-center justify-content-center border bg-light border border-0 border-success shadow">
        <img className='container-fluid mb-3 m-0 p-0' src='./NewCard3.png' alt='test'></img>
        <h1 className='text-center fw-bold fs-2'>ARE MOODY BARS BANNED?</h1>
    </div>
    </div>
    <div className='col-12 mt-5 m-0 p-0 d-flex align-items-center justify-content-center'>
        <button className='btn fs-5 text-light' style={{backgroundColor:'#000'}}>View More</button>
    </div>
     </div>
     
     </div> 
   </div>
  )
}

export default NewsAndUpdates