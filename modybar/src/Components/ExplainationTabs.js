import React from 'react'
import 'antd/dist/antd.css';
import CommonCustomCard from './CommonComponent/CommonCustomCard';
import { Tabs } from 'antd';
const ExplainationTabs = () => {
  return (
    <div className='container-fluid mt-5 m-0 p-0 w-100'>
     <div className='row border border-0 border-success m-0 p-0'>
     <Tabs defaultActiveKey="1" centered>
       <Tabs.TabPane tab="Bar" key="1">
        <div className='row m-0 p-0 border border-0 border-danger'>   
          <CommonCustomCard explainImage='./ExplainImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='MOODY BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-50 m-0 px-2 py-4 border border-0 border-success d-flex flex-column justify-content-center align-items-center order-1' childTwoClass=' order-2 w-50 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>
        </div>
       </Tabs.TabPane>
       <Tabs.TabPane tab="Plus" key="2">
       <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./ExplainImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='MOODY BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-50 m-0 px-2 py-4 border border-0 border-success d-flex flex-column justify-content-center align-items-center order-1' childTwoClass=' order-2 w-50 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>    
        </div>
       </Tabs.TabPane>
       <Tabs.TabPane tab="Flow" key="3">
       <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./ExplainImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='MOODY BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-50 m-0 px-2 py-4 border border-0 border-success d-flex flex-column justify-content-center align-items-center order-1' childTwoClass=' order-2 w-50 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>    
       </div>
       </Tabs.TabPane>
       <Tabs.TabPane tab="Max" key="4">
       <div className='row m-0 p-0 border border-0 border-danger'>   
       <CommonCustomCard explainImage='./ExplainImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-row" heading='MOODY BAR' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-50 m-0 px-2 py-4 border border-2 border-success d-flex flex-column justify-content-center align-items-center order-1' childTwoClass=' order-2 w-50 m-0 p-0 d-flex align-items-center justify-content-center border border-2 border-danger'></CommonCustomCard>    
        </div>
       </Tabs.TabPane>
      </Tabs>
     </div> 
   </div>
  )
}

export default ExplainationTabs