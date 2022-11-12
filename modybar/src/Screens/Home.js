import React from 'react'
import Devices from '../Components/Devices';
import BestSellers from '../Components/BestSellers';
import NewsAndUpdates from '../Components/NewsAndUpdates';
import ExplainationTabs from '../Components/ExplainationTabs';
import OvweCustomer from '../Components/OvweCustomer';
const Home = () => {
  return (
    <div className='conatiner-fluid border border-0 border-warning d-flex align-items-center justify-content-center m-0 p-0 h-100'>
         <div className='row w-100 m-0 p-0 d-flex justify-content-center'>
          <div className='col-12 m-0 p-0 border border-0 border-success'> 
             <img className='img-fluid m-0 p-0 w-100' src='./Bannerblack.png' alt=''></img>
          </div>
          <div className='col-11 m-0 px-5 p-0 border border-0 border-success'>        
                <Devices Heading='Shop Our Vape Devices'></Devices>
          </div>
          <div className='col-12 m-0 p-0 d-flex align-items-center justify-content-center'>
            <BestSellers heading='Best Sellers'></BestSellers>
          </div>
          <div className='col-12 m-0 p-0'>
             {/* News and Update */}
              <NewsAndUpdates heading='Puff Bar News & Updates'></NewsAndUpdates>
          </div>
          <div className='col-12 m-0 p-0'>
              {/* Explaination */}
            <ExplainationTabs></ExplainationTabs>
          </div>
          <div className='col-12'>
            <OvweCustomer></OvweCustomer>
          </div>
         </div>
    </div>
  )
}

export default Home