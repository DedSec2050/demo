"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from 'react-fast-marquee';
import 'swiper/swiper-bundle.css'



const Slider = () => {
  const demos = ["demo1 ", "demo2 ", "demo3 ", "demo4 ", "demo5"]
  let demolist =[]
  demos.forEach((demo,index)=>{
    demolist.push(<div key={index} className='mt-4 text-sky-500 mr-[5rem]'>{demo}</div>)
  });
  

  return (
    

    <div className='container mt-7 text-center'>

    <Swiper
      
      loop={true} 
      spaceBetween={50}
      slidesPerView={
        3
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      
    </Swiper>

    <Marquee >
      {
        demolist
      }
    </Marquee>
      </div>
  );
}

export default Slider;
