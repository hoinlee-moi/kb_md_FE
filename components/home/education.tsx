"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalBasic from "../ui/modal";

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState("");

  const videoHandler = (name: string) => {
    setVideo(name);
    modalHandler(true);
  };

  const modalHandler = (value: boolean) => setIsOpen(value);

  return (
    <div>
      <p className="font-semibold mb-3 text-slate-700">최근 시청중인 콘텐츠</p>
      <Swiper slidesPerView={1.5} spaceBetween={20} centeredSlides={true}>
        {DUMMYYOUTUBE.map((v, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[150px] rounded-md relative overflow-hidden shadow-xl">
              <button onClick={() => videoHandler(v.name)}>
                <Image src={v.imgSrc} fill sizes="150" alt="education" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-right mt-2 text-kb-gray text-sm cursor-pointer">
        전체보기
      </p>
      <ModalBasic isOpen={isOpen} setIsOpen={modalHandler} title="교육">
        <div className="w-full h-full flex items-center justify-center p-10 ">
          <iframe
            className="rounded-lg"
            src={`https://www.youtube.com/embed/${
              DUMMYYOUTUBE.find((v) => v.name === video)?.video
            }`}
          />
        </div>
      </ModalBasic>
    </div>
  );
}

const DUMMYYOUTUBE = [
  {
    imgSrc: "https://img.youtube.com/vi/3E59AgFFwDs/0.jpg",
    video: "3E59AgFFwDs",
    name: "kb1",
  },
  {
    imgSrc: "https://img.youtube.com/vi/RE5ZczT3JZs/0.jpg",
    video: "RE5ZczT3JZs",
    name: "kb2",
  },
  {
    imgSrc: "https://img.youtube.com/vi/RE5ZczT3JZs/0.jpg",
    video: "RE5ZczT3JZs",
    name: "kb3",
  },
  {
    imgSrc: "https://img.youtube.com/vi/e7UzG0Ypryk/0.jpg",
    video: "e7UzG0Ypryk",
    name: "kb4",
  },
];
