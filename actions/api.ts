"use server";

const URL = "http://localhost:8080";
//env로 넣어야 하지만 간단한 시연이니 전역으로 진행

export const getRecentTransactions = async (userId: number) => {
  const res = await fetch(`${URL}/api/transactions/recent/${String(userId)}`);
  console.log(res);
};
