"use server";

const URL = "http://localhost:8080";
const userId = 1;

//env로 넣어야 하지만 간단한 시연이니 전역으로 진행

// 전국 랭킹조회
export const getNationalRanking = async (): Promise<GetRankResponDate> => {
  const res = await fetch(`${URL}/api/rankings/nationwide/${userId}`);

  return res.json();
};

//지역 랭킹조회
export const getRegionalRanking = async (): Promise<GetRankResponDate> => {
  const res = await fetch(`${URL}/api/rankings/region/${userId}`);

  return res.json();
};

// 사용자 KBScore조회
export const getUserKBScore = async (): Promise<number> => {
  const res = await fetch(`${URL}/api/rankings/score/${userId}`);

  return res.json();
};

// 특정 리워드 수령 PUT
export const claimReward = async (rewardId: number) => {
  await fetch(`${URL}/api/rewards/claim/${userId}/${rewardId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
};

//카테고리별 리워드 목록 조회
export const getRewardListByCategory = async (
  category: string
): Promise<GetRewardList[]> => {
  const res = await fetch(`${URL}/api/rewards/list/${category}`);

  return res.json();
};

//사용자 리워드 포인트 조회
export const getRewardPoints = async (): Promise<number> => {
  const res = await fetch(`${URL}/api/rewards/points/${userId}`);

  return res.json();
};

//사용자의 리워드 진행 상태 조회
export const getUserRewardStatus = async (): Promise<GetUserRewardState[]> => {
  const res = await fetch(`${URL}/api/rewards/personal/${userId}`);

  return res.json();
};

//저축 목표 추가
export const addSavingGoal = async (data: {
  name: string;
  targetAmount: number;
}) => {
  const res = await fetch(`${URL}/api/saving-goals/add/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  return res.json();
};

// 저축 목표 입금
export const depositToSavingGoal = async (goalId: string) => {
  const res = await fetch(`${URL}/api/saving-goals/save/${userId}/${goalId}`);

  return res.json();
};

// 저축 목표 조회
export const getSavingGoalInfo = async (
  num: string
): Promise<GetSavingGoalInfo> => {
  const res = await fetch(`${URL}/api/saving-goals/inform/${userId}/${num}`);

  return res.json();
};

// 저축 목표 수정
export const updateSavingGoal = async (data: {
  goalId: number;
  name: string;
  targetAmount: number;
}) => {
  const res = await fetch(`${URL}/api/saving-goals/edit/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  return res.json();
};

// 파이 차트 카테고리별 비율 조회
export const getCategoryExpenseChart = async (
  month: number
): Promise<getCategoryPie[] | void> => {
  const res = await fetch(
    `${URL}/api/transactions/category-summary/${userId}/${month}`
  );
  if (res.ok) return res.json();
};

// 파이 차트 지출 수입 조회
export const getMonthlyIncomeExpenseChart = async (
  month: number
): Promise<GetMonthlyPieEx | void> => {
  const res = await fetch(`${URL}/api/transactions/summary/${userId}/${month}`);
  if (res.ok) return res.json();
};

// 당월 지출 수입 합계 조회
export const getMonthlyIncomeAndExpense = async (
  month: string
): Promise<GetMonthlyExTotal> => {
  const res = await fetch(
    `${URL}/api/transactions/monthly-summary/${userId}/${month}`
  );

  return res.json();
};

// 달력 데이터 조회
export const getMonthlyTransactionData = async (
  month: number
): Promise<GetMonthTransData[] | void> => {
  const res = await fetch(
    `${URL}/api/transactions/calendar/${userId}/${month}`
  );
  if (res.ok) return res.json();
};

// 최근 거래 내역 조회
export const getRecentTransactions = async (): Promise<GetRecentTrans[]> => {
  const res = await fetch(`${URL}/api/transactions/recent/${userId}`);

  return res.json();
};

// 계좌 잔액 조회
export const getTotalAccountBalance = async (): Promise<GetTotalAccBal> => {
  const res = await fetch(
    `${URL}/api/transactions/accounts/total-balance/${userId}`
  );

  return res.json();
};
