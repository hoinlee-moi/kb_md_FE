"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { depositToSavingGoal } from "@/actions/api";
import ModalBasic from "../ui/modal";
import TargetBankModify from "./targetBankModify";

type PropsType = {
  data: GetSavingGoalInfo;
  refet: () => void;
};

export default function TargetBank({
  data: { name, savedAmount, targetAmount, goalId },
  refet,
}: PropsType) {
  const [money, setMoney] = useState(savedAmount);
  const [perSent, setPersent] = useState(
    +((money / targetAmount) * 100).toFixed()
  );
  const [isOpen, setIsOpen] = useState(false);

  const persentCal = () => {
    return +((money / targetAmount) * 100).toFixed();
  };
  const depositToSave = async () => {
    try {
      const res = await depositToSavingGoal(goalId);
      if (res.ok) {
        setMoney((prev) => (prev < targetAmount ? prev + 1000 : prev));
        setPersent(money);
      }
    } catch (error) {
      console.error(error);
    }
    setMoney((prev) => (prev < targetAmount ? prev + 1000 : prev));
    setPersent(persentCal());
  };

  const setImage = () => {
    let idx = 0;
    if (perSent >= 30) idx = 1;
    if (perSent >= 60) idx = 2;
    if (perSent >= 100) idx = 3;
    return idx;
  };

  useEffect(() => {
    setMoney(savedAmount);
  }, [name, savedAmount]);

  const modalHandler = (value: boolean) => setIsOpen(value);

  return (
    <div className="flex pb-5">
      <div className="w-[80px] h-[80px] relative">
        <Image
          src={`/assets/character${setImage()}.png`}
          alt=""
          sizes="80px"
          fill
        />
      </div>
      <div className="flex w-full flex-col justify-evenly">
        <div className="flex justify-between items-center">
          <p className="font-semibold">목표: {name}</p>
          <div className="flex flex-nowrap space-x-2">
            <Button
              disabled={money === targetAmount}
              size="sm"
              className="bg-kb-main text-kb-gray font-bold px-2 py-[2px] hover:bg-kb-main disabled:bg-kb-gray disabled:text-white"
              onClick={depositToSave}
            >
              {money === targetAmount ? "완료!" : "동전저금"}
            </Button>
            <Button
              size="sm"
              className="bg-kb-gray px-2 py-[2px]"
              onClick={() => modalHandler(true)}
            >
              편집
            </Button>
          </div>
        </div>
        <div className="relative">
          <div
            className="text-xs font-bold text-right transition-all duration-500 mb-1"
            style={{ width: `${perSent >= 90 ? 100 : perSent + 7}%` }}
          >
            <span>{perSent}%</span>
          </div>
          <div className="w-full overflow-hidden rounded-md bg-slate-200 relative">
            <span
              className={`block h-[20px] bg-kb-sub transition-all duration-500`}
              style={{ width: `${perSent}%` }}
            />
            <span className="text-xs font-semibold absolute right-0 top-1/2 -translate-y-1/2">
              {money} / {targetAmount}
            </span>
          </div>
        </div>
      </div>
      <ModalBasic
        isOpen={isOpen}
        setIsOpen={modalHandler}
        title="목표 수정하기"
      >
        <TargetBankModify
          refet={refet}
          setIsOpen={modalHandler}
          name={name}
          targetAmount={targetAmount}
        />
      </ModalBasic>
    </div>
  );
}
