"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export default function TargetBank() {
  const [money, setMoney] = useState(0);

  const setPersent = () => setMoney((prev) => (prev >= 100 ? prev : prev + 5));
  const setImage = () => {
    let idx = 0;
    if (money >= 30) idx = 1;
    if (money >= 60) idx = 2;
    if (money >= 100) idx = 3;
    return idx;
  };
  return (
    <div className="flex pb-5">
      <div className="w-[80px] h-[80px] relative">
        <Image src={`/assets/character${setImage()}.png`} alt="" sizes="80px" fill />
      </div>
      <div className="flex w-full flex-col justify-evenly">
        <div className="flex justify-between items-center">
          <p className="font-semibold">목표: 아이패드</p>
          <div className="flex flex-nowrap space-x-2">
            <Button size="sm" className="bg-kb-main text-kb-gray font-bold px-2 py-[2px] hover:bg-kb-main" onClick={setPersent}>
              동전저금
            </Button>
            <Button size="sm" className="bg-kb-gray px-2 py-[2px]">
              편집
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="text-xs font-bold text-right transition-all duration-500 mb-1" style={{ width: `${money >= 90 ? 100 : money + 7}%` }}>
            <span>{money}%</span>
          </div>
          <div className="w-full overflow-hidden rounded-md bg-slate-200">
            <span className={`block h-[20px] bg-kb-sub transition-all duration-500`} style={{ width: `${money}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
