import React from 'react'
const HeaderCard = () => {
  return (
    <div className='container-fluid m-0 p-0  border-end border-2 border-dark'>
       <div className='row m-0 p-0'>
          <div className='col-5 m-0 p-0 border border-0 border-success'>
            <img className='img-fluid' src='https:////cdn.shopify.com/s/files/1/0286/8071/6332/files/NAV-BAR_Guava-Ice_300x.png?v=1658447904' alt='test-image'></img>
          </div>
          <div className='position-relative col-7 m-0 p-0 border border-0 border-danger'>
            <div className='position-absolute bottom-0 w-100  border  border-0 border-dark' style={{fontWeight:'500'}}>
             <h4>Puff Bar</h4>
             <p>500 Puffs | 17 Flavours</p>
            </div>
          </div>
       </div>  
    </div>
  )
}

export default HeaderCard