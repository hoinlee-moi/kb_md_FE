"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Education() {
  return (
    <div>
      <p className="font-semibold mb-3 text-slate-700">최근 시청중인 콘텐츠</p>
      <Swiper slidesPerView={1.5} spaceBetween={20} centeredSlides={true}>
        <SwiperSlide>
          <div className="w-full h-[150px] rounded-md relative overflow-hidden shadow-xl">
            <Image src="https://img.youtube.com/vi/3E59AgFFwDs/0.jpg" fill sizes="150" alt="education" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[150px] rounded-md relative overflow-hidden shadow-xl">
            <Image src="https://img.youtube.com/vi/RE5ZczT3JZs/0.jpg" fill sizes="150" alt="education" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[150px] rounded-md relative overflow-hidden shadow-xl">
            <Image src="https://img.youtube.com/vi/e7UzG0Ypryk/0.jpg" fill sizes="150" alt="education" />
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="text-right mt-2 text-kb-gray text-sm cursor-pointer">전체보기</p>
    </div>
  );
}
