import React from 'react'
import 'antd/dist/antd.css';
import CommonCustomCard from './CommonComponent/CommonCustomCard';
import { Tabs } from 'antd';
import SwiperCore, { Autoplay,Pagination,Navigation,EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
SwiperCore.use([Autoplay,Pagination,Navigation]);
const BestSellers = (props) => {
  const onChange = (key) => {
    console.log(key);
  };
  const breakPoints = {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    }
  }
  return (
    <>
    <div className='container-fluid mt-5 m-0 p-0 w-75'>
     <div className='row mt-5 m-0 p-0'>
          <div className='col-12 mt-3 m-0 p-0 d-flex align-items-center justify-content-center'>
                <h1 className='mb-3'>{props.heading}</h1>
          </div>
     </div>
      <div className='row border border-0 border-success m-0 p-0'>
    
    <Tabs defaultActiveKey="1" centered>
     <Tabs.TabPane tab="Bar" key="1">
      <div className='row m-0 p-0 border border-0 border-danger'>
       {
            <Swiper 
            style={{border:'0px solid black'}}
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={4}
            loop={true}
            breakpoints={breakPoints}
            effect={"coverflow"}
            autoplay
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
           {/* change Store2 by products and data by product*/}
         {
           props.data.map((item,index)=>   
           <SwiperSlide key={index} style={{paddingBottom:'5px'}}>
            <div className='row m-0 p-0 border border-0 border-danger'>   
              <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>                     
            </div>
            </SwiperSlide>)} 
        </Swiper>
        }   
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Plus" key="2">
    <div className='row m-0 p-0 border border-0 border-danger'>
       {
            <Swiper 
            style={{border:'0px solid black'}}
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={4}
            loop={true}
            breakpoints={breakPoints}
            effect={"coverflow"}
            autoplay
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
           {/* change Store2 by products and data by product*/}
         {
           props.data.map((item,index)=>   
           <SwiperSlide key={index} style={{paddingBottom:'5px'}}>
            <div className='row m-0 p-0 border border-0 border-danger'>   
              <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>                     
            </div>
            </SwiperSlide>)} 
        </Swiper>
        }   
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Flow" key="3">
    <div className='row m-0 p-0 border border-0 border-danger'>
       {
            <Swiper 
            style={{border:'0px solid black'}}
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={4}
            loop={true}
            breakpoints={breakPoints}
            effect={"coverflow"}
            autoplay
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
           {/* change Store2 by products and data by product*/}
         {
           props.data.map((item,index)=>   
           <SwiperSlide key={index} style={{paddingBottom:'5px'}}>
            <div className='row m-0 p-0 border border-0 border-danger'>   
              <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>                     
            </div>
            </SwiperSlide>)} 
        </Swiper>
        }   
     </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Max" key="4">
    <div className='row m-0 p-0 border border-0 border-danger'>
       {
            <Swiper 
            style={{border:'0px solid black'}}
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={4}
            loop={true}
            breakpoints={breakPoints}
            effect={"coverflow"}
            autoplay
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
           {/* change Store2 by products and data by product*/}
         {
           props.data.map((item,index)=>   
           <SwiperSlide key={index} style={{paddingBottom:'5px'}}>
            <div className='row m-0 p-0 border border-0 border-danger'>   
              <CommonCustomCard explainImage='./CustopmCardImage.png' mainParent="col-12 mt-4 m-0 px-3 p-0 border border-0 border-dark d-flex flex-column" heading='Moody Bar' quantity='500 Puffs' flavour='17 Flavours' btnText='Shop Now' btnColor='#000' btnTextColor="white" cardText="1" childOneClass='w-100 m-0 px-2 py-4 d-flex flex-column justify-content-center align-items-center order-2' childTwoClass='w-100 m-0 p-0 d-flex align-items-center justify-content-center border border-0 border-danger'></CommonCustomCard>                     
            </div>
            </SwiperSlide>)} 
        </Swiper>
        }   
     </div>
    </Tabs.TabPane>
  </Tabs>
      </div> 
    </div>
    {/*  */}
    </>
  )

}

export default BestSellers
