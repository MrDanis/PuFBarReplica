import React,{useContext} from 'react'
import Devices from '../Components/Devices';
import BestSellers from '../Components/BestSellers';
import NewsAndUpdates from '../Components/NewsAndUpdates';
import ExplainationTabs from '../Components/ExplainationTabs';
import OvweCustomer from '../Components/OvweCustomer';
import Video from "../Assets/Video.mp4"
import { ProductContex } from '../ContextStore';
const Home = () => {
   const {producData} = useContext(ProductContex);
  return (
     
    <div className='conatiner-fluid border border-0 border-warning d-flex align-items-center justify-content-center m-0 p-0 h-100'>
         <div className='row w-100 m-0 p-0 d-flex justify-content-center'>
          <div className='col-12 m-0 p-0 border border-0 border-success'> 
             {/* <img className='img-fluid m-0 p-0 w-100' src='./LatestGanner.png' alt='' style={{height:'100vh'}}></img> */}
                {/* <img className='img-fluid m-0 p-0 w-100' src='./LatestGanner.png' alt='' style={{height:'100vh'}}></img> */}
                <video style={{height:"100%",width:"100%",float:"left",padding:0,}} className='videoTag' autoPlay loop muted
              // controls
              >
    <source src={Video} type='video/mp4' />
</video>
          </div>
          <div className='col-11 m-0 px-5 p-0 border border-0 border-success'>        
                <h1>test{producData?.length}</h1>
                <Devices data={producData} Heading='Shop Our Vape Devices'></Devices>
          </div>
          <div className='col-12 m-0 p-0 d-flex align-items-center justify-content-center'>
            <BestSellers data={producData} heading='Best Sellers'></BestSellers>
          </div>
          <div className='col-12 m-0 p-0'>
              <NewsAndUpdates heading='Moody Bar News & Updates'></NewsAndUpdates>
          </div>
          <div className='col-12 m-0 p-0'>
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