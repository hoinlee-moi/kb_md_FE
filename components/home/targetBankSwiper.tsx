"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import TargetBank from "./targetBank";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import SwiperNavigation from "./swiperNavigation";
import ModalBasic from "../ui/modal";
import TargetBankCreate from "./targetBankCreate";
import { useTargetBank } from "@/hooks/targetBank-context";

// import { useReducer } from "react";

export default function TargetBankSwiper() {
  const { targetList } = useTargetBank();
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<SwiperClass>(null);
  const openHandler = (value: boolean) => setIsOpen(value);

  // const fetchHandler = async () => {
  //   try {
  //     const res = await getSavingGoalInfo();
  //     const sortRes = res.sort((a, b) => {
  //       const aTime = new Date(a.createdAt);
  //       const bTime = new Date(b.createdAt);
  //       if (aTime.getTime() > bTime.getTime()) return 1;
  //       else return -1;
  //     });
  //     setTargetList(sortRes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // setTargetList(
  //   //   DUMMY.sort((a, b) => {
  //   //     const aTime = new Date(a.createdAt);
  //   //     const bTime = new Date(b.createdAt);
  //   //     if (aTime.getTime() < bTime.getTime()) return 1;
  //   //     else return -1;
  //   //   })
  //   // );
  // };

  // useEffect(() => {
  //   (async () => {
  //     await fetchHandler();
  //   })();
  // }, []);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="w-full flex justify-center items-center">
          {targetList.map((_, idx) => (
            <SwiperNavigation className="mr-3" key={idx + Math.random()} current={page} idx={idx} />
          ))}
        </div>
        <Button
          onClick={() => openHandler(true)}
          size="icon"
          className="h-[28px] bg-kb-main text-xs text-kb-gray py-[1px] font-bold hover:bg-kb-main"
        >
          추가
        </Button>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => {
          setPage(swiperRef.current?.realIndex ?? 0);
        }}
        className=""
      >
        {targetList.map((v, idx) => (
          <SwiperSlide key={idx}>
            <TargetBank data={v} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalBasic isOpen={isOpen} setIsOpen={openHandler} title="목표추가하기">
        <TargetBankCreate setIsOpen={openHandler} />
      </ModalBasic>
    </div>
  );
}
