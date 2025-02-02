"use client";

import { useEffect, useState } from "react";

type PropsType = { target: number; loopCount?: number };

export default function PointRullet({ target, loopCount = 30 }: PropsType) {
  const [countArr, setCountArr] = useState([0, 0]);

  useEffect(() => {
    console.log(target, countArr);
    const inter = setInterval(() => {
      setCountArr(([count, loop]) => {
        if (count === target && loop > loopCount) {
          clearInterval(inter);
          return [count, loop];
        }
        return [count > 8 ? 0 : count + 1, loop + 1];
      });
    }, 40);
    return () => clearInterval(inter);
  }, []);

  return <>{countArr[0]}</>;
}
