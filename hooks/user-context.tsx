"use client";

import { getMonthlyIncomeAndExpense, getTotalAccountBalance } from "@/actions/api";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
type UserType = {
  totalAccount: number;
  monthlyAccount: number;
  diffAccount: number;
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
  },
  reFetchUser: async () => {},
});

export const UserContextProvier = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>({
    totalAccount: 0,
    monthlyAccount: 0,
    diffAccount: 0,
  });

  const reFetchUser = async () => await fetchUser();

  const fetchUser = async () => {
    const date = new Date();
    const month = date.getMonth() + 1;

    try {
      const lastMonth = await getMonthlyIncomeAndExpense(month - 1);
      const curMonth = await getMonthlyIncomeAndExpense(month);
      const totalAcc = await getTotalAccountBalance();

      setUser({
        monthlyAccount: curMonth.totalSum,
        totalAccount: totalAcc.userBalance,
        diffAccount: lastMonth.totalSum - curMonth.totalSum,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUser();
    })();
  }, []);

  return <UserContext.Provider value={{ user, reFetchUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
