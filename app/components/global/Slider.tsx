"use client";
import React from "react";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

interface SliderProps extends SwiperProps {
  children: React.ReactNode;
}

function Slider({ children, ...props }: SliderProps) {
  return (
    <Swiper modules={[Pagination, Autoplay]} {...props}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
