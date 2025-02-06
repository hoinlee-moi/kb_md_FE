"use client";

import { getMonthlyIncomeAndExpense, getRecentTransactions, getRewardPoints, getTotalAccountBalance, getUserKBScore } from "@/actions/api";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
type UserType = {
  totalAccount: number;
  monthlyAccount: number;
  diffAccount: number;
  score: number;
  reward: number;
  recentList: GetRecentTrans[];
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
    recentList: [],
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
    recentList: [],
  });

  const reFetchUser = async () => {
    await fetchUser();
    await fetchScore();
    await fetchReward();
    await fetchRecentUsage();
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

  const fetchRecentUsage = async () => {
    try {
      const res = await getRecentTransactions();
      setUser((prev) => ({ ...prev, recentList: res }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
      await fetchScore();
      await fetchReward();
      await fetchRecentUsage();
    })();
  }, []);

  return <UserContext.Provider value={{ user, reFetchUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
