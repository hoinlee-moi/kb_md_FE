"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TargetBank from "./targetBank";
import { useState } from "react";
// import { useReducer } from "react";

export default function TargetBankSwiper() {
  const [targetList, setTargetList] = useState([]);
  // const [page, nextPage] = useReducer((prev) => (prev >= 5 ? 1 : prev + 1), 1);
  const changeHandler = () => console.log("바뀐?");
  return (
    <div>
      <div>구현 예정</div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSlideChange={changeHandler}
        className=""
      >
        <SwiperSlide>
          <TargetBank />
        </SwiperSlide>
        <SwiperSlide>
          <TargetBank />
        </SwiperSlide>
        <SwiperSlide>
          <TargetBank />
        </SwiperSlide>
        <SwiperSlide>
          <TargetBank />
        </SwiperSlide>
        <SwiperSlide>
          <TargetBank />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
