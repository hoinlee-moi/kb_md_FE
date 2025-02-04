type ChartDataset = {
  label: string;
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
  borderWidth: number;
};

type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
};

//api type

type GetRewardList = {
  id: number;
  name: string;
  category: string;
  goal: number;
  points: number;
};

type GetUserRewardState = {
  rewardId: number;
  progress: number;
  status: string;
};

type GetSavingGoalInfo = {
  goalId: number;
  name: string;
  targetAmount: number;
  savedAmount: number;
  createdAt: string;
};

type getCategoryPie = {
  category: string;
  totalAmount: number;
};

type GetMonthlyExTotal = {
  totalIncome: number;
  totalExpense: number;
  totalSum: number;
};

type GetMonthlyPieEx = {
  totalIncome: number;
  totalExpense: number;
};

type GetMonthTransData = { date: string; totalAmount: number };

type GetRecentTrans = {
  amount: number;
  category: string;
  date: string;
  type: string;
  content: string;
};

type GetTotalAccBal = {
  userBalance: number;
};

type GetRankData = {
  username: string;
  region: string;
  score: number;
};

type GetRankResponDate = [
  GetRankData[],
  { rank: number; score: number; region: string }
];
