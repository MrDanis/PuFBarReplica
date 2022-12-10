import React from 'react'
import CommonCustomCard from './CommonComponent/CommonCustomCard'
const Devices = (props) => {
  return (
    <div className='container-fluid m-0 p-0 border border-0 border-danger'>
       <div className='row m-0 p-0 border border-0 border-dark'>
         <div className='col-12 mb-3 m-0 py-3 p-0 d-flex align-items-center justify-content-center'>
             <h1 className='fw-bold'>{props.Heading}</h1>
         </div>
       </div>
       <div className='row m-0 p-0 border border-0 border-dark'>
        {
          props.data.map((item,index)=>{
            return(
              <CommonCustomCard 
                redirectdTo={`/products/${item.system_id}`}
                explainImage='./CustopmCardImage.png'
                mainParent="shadow col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row"
                heading='Moody Bar'
                quantity='500 Puffs'
                flavour='17 Flavours'
                btnText='Shop Now' 
                btnColor='#000' 
                btnTextColor="white"
                cardText="1" 
                childOneClass='col-6 m-0 px-2 py-4 d-flex flex-column'
                childTwoClass='col-6 m-0 p-0 d-flex align-items-center justify-content-center'> 
                </CommonCustomCard>
            )
          })
        }
           {/* <CommonCustomCard redirectdTo='/' explainImage='./CustopmCardImage.png' mainParent="shadow col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='col-6 m-0 px-2 py-4 d-flex flex-column' childTwoClass='col-6 m-0 p-0 d-flex align-items-center justify-content-center'></CommonCustomCard>
           <CommonCustomCard redirectdTo='/' explainImage='./CustopmCardImage.png' mainParent="shadow col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='col-6 m-0 px-2 py-4 d-flex flex-column' childTwoClass='col-6 m-0 p-0 d-flex align-items-center justify-content-center'></CommonCustomCard>
           <CommonCustomCard redirectdTo='/' explainImage='./CustopmCardImage.png' mainParent="shadow col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='col-6 m-0 px-2 py-4 d-flex flex-column' childTwoClass='col-6 m-0 p-0 d-flex align-items-center justify-content-center'></CommonCustomCard>
           <CommonCustomCard redirectdTo='/' explainImage='./CustopmCardImage.png' mainParent="shadow col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='col-6 m-0 px-2 py-4 d-flex flex-column' childTwoClass='col-6 m-0 p-0 d-flex align-items-center justify-content-center'></CommonCustomCard> */}
       </div>
    </div>
  )
}

export default Devices