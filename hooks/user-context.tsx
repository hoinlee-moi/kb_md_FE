"use client";

import { getMonthlyIncomeAndExpense, getRewardPoints, getTotalAccountBalance, getUserKBScore } from "@/actions/api";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
type UserType = {
  totalAccount: number;
  monthlyAccount: number;
  diffAccount: number;
  score: number;
  reward: number;
};
type UserContextType = {
  user: UserType;
  reFetchUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({
  user: {
    totalAccount: 0,
    monthlyAccount: 0,
    diffAccount: 0,
    score: 0,
    reward: 0,
  },
  reFetchUser: async () => {},
});

export const UserContextProvier = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>({
    totalAccount: 0,
    monthlyAccount: 0,
    diffAccount: 0,
    score: 0,
    reward: 0,
  });

  const reFetchUser = async () => {
    await fetchUser();
    await fetchScore();
    await fetchReward();
  };

  const fetchUser = async () => {
    const date = new Date();
    const month = date.getMonth() + 1;

    try {
      const lastMonth = await getMonthlyIncomeAndExpense(month - 1);
      const curMonth = await getMonthlyIncomeAndExpense(month);
      const totalAcc = await getTotalAccountBalance();

      setUser((prev) => ({
        ...prev,
        monthlyAccount: curMonth.totalSum,
        totalAccount: totalAcc.userBalance,
        diffAccount: lastMonth.totalSum - curMonth.totalSum,
      }));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchScore = async () => {
    try {
      const res = await getUserKBScore();
      setUser((prev) => ({ ...prev, score: res }));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchReward = async () => {
    try {
      const res = await getRewardPoints();
      setUser((prev) => ({ ...prev, reward: res }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
      await fetchScore();
      await fetchReward();
    })();
  }, []);

  return <UserContext.Provider value={{ user, reFetchUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
