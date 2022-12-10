import React, { useState } from 'react'
import CommonCustomCard from '../Components/CommonComponent/CommonCustomCard' 
const ProductAll = () => {
    const[testProductsArray,settestProductsArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  return (
    <div className='container-fluid m-0 p-0 d-flex justify-content-center align-items-center'>
        <div className='row w-75 m-0 p-0 border border-0 border-danger'>
            {
            testProductsArray.map((item,index)=>                
              <div class="col-12 col-sm-6 col-md-3" key={index}>
                <div class="p-3">
                  <CommonCustomCard redirectdTo={`/products/${index}`} explainImage='/CustopmCardImage.png' mainParent="shadow col-12 mt-4 m-0 p-0 border border-0 border-dark d-flex flex-column" heading='Moody Bar' quantity='500 Puffs' flavour='test' btnClass='w-100 fw-bold p-2 rounded' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='col-12 m-0 px-0 pb-0 py-4 d-flex flex-column align-items-center justify-content-center order-2' childTwoClass='col-12 m-0 p-0 d-flex align-items-center justify-content-center order-1'></CommonCustomCard>
                </div>
              </div>
            )
            }
           
        </div>
    </div>
  )
}

export default ProductAll