"use client";
import { getSavingGoalInfo } from "@/actions/api";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type TargetBankContextType = {
  targetList: GetSavingGoalInfo[];
  refetchList: () => Promise<void>;
};

const TargetBankContext = createContext<TargetBankContextType>({
  targetList: [],
  refetchList: async () => {},
});

export const TargetBankProvider = ({ children }: PropsWithChildren) => {
  const [targetBank, setTargetBank] = useState<GetSavingGoalInfo[]>([]);

  const fetchBankList = async () => {
    try {
      const res = await getSavingGoalInfo();
      setTargetBank(res);
    } catch (error) {
      console.error(error);
    }
  };

  const refetchList = async () => await fetchBankList();

  useEffect(() => {
    (async () => {
      await fetchBankList();
    })();
  }, []);

  return <TargetBankContext.Provider value={{ targetList: targetBank, refetchList }}>{children}</TargetBankContext.Provider>;
};

export const useTargetBank = () => useContext(TargetBankContext);
