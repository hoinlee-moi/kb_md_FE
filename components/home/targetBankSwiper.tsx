"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import TargetBank from "./targetBank";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { getSavingGoalInfo } from "@/actions/api";
import SwiperNavigation from "./swiperNavigation";
import ModalBasic from "../ui/modal";
import TargetBankCreate from "./targetBankCreate";

// import { useReducer } from "react";

export default function TargetBankSwiper() {
  const [targetList, setTargetList] = useState<GetSavingGoalInfo[]>([]);
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<SwiperClass>(null);
  const openHandler = (value: boolean) => setIsOpen(value);

  const fetchHandler = async () => {
    try {
      const res = await getSavingGoalInfo();
      const sortRes = res.sort((a, b) => {
        const aTime = new Date(a.createdAt);
        const bTime = new Date(b.createdAt);
        if (aTime.getTime() < bTime.getTime()) return 1;
        else return -1;
      });
      setTargetList(sortRes);
    } catch (error) {
      console.error(error);
    }
    // setTargetList(
    //   DUMMY.sort((a, b) => {
    //     const aTime = new Date(a.createdAt);
    //     const bTime = new Date(b.createdAt);
    //     if (aTime.getTime() < bTime.getTime()) return 1;
    //     else return -1;
    //   })
    // );
  };

  useEffect(() => {
    (async () => {
      await fetchHandler();
    })();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="w-full flex justify-center items-center">
          {targetList.map(({}, idx) => (
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
            <TargetBank data={v} refet={fetchHandler} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalBasic isOpen={isOpen} setIsOpen={openHandler} title="목표추가하기">
        <TargetBankCreate refet={fetchHandler} setIsOpen={openHandler} />
      </ModalBasic>
    </div>
  );
}

// const DUMMY = [
//   {
//     name: "아이패드",
//     targetAmount: 560000,
//     savedAmount: 300000,
//     createdAt: "2023-02-14",
//   },
//   {
//     name: "버즈프로",
//     targetAmount: 250000,
//     savedAmount: 64000,
//     createdAt: "2022-09-26",
//   },
//   {
//     name: "데스크탑",
//     targetAmount: 1000000,
//     savedAmount: 750000,
//     createdAt: "2021-12-24",
//   },
// ];
