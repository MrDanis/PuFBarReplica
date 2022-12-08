import React from 'react'
import 'antd/dist/antd.css';
import CommonCustomCard from './CommonComponent/CommonCustomCard';
import { Tabs } from 'antd';
const BestSellers = (props) => {
  return (
    <>
    <div className='container-fluid mt-5 m-0 p-0 w-75' style={{zIndex:-111}}>
     <div className='row mt-5 m-0 p-0'>
          <div className='col-12 mt-3 m-0 p-0 d-flex align-items-center justify-content-center'>
                <h1 className='mb-3'>{props.heading}</h1>
          </div>
     </div>
      <div className='row border border-0 border-success m-0 p-0'>
      <Tabs defaultActiveKey="1" centered>
    <Tabs.TabPane tab="Bar" key="1">
     <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 col-sm-6 col-md-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>       
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Plus" key="2">
    <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>       
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Flow" key="3">
    <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>       
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Max" key="4">
    <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
       <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-3 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='PUFF BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>       
     </div>
    </Tabs.TabPane>
  </Tabs>
      </div> 
    </div>
    </>
  )
}

export default BestSellers