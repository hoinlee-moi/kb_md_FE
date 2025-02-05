"use client";
import { getRewardListByCategory, getRewardPoints, getUserRewardStatus } from "@/actions/api";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type UserRewardType = {
  rewardPoint: number;
  rewardList: (GetRewardList & GetUserRewardState)[];
};

type RewardContextType = {
  rewardInfo: UserRewardType;
  reFetchPoint: () => Promise<void>;
  reFetchList: (category: string) => Promise<void>;
};

const RewarContext = createContext<RewardContextType>({
  rewardInfo: {
    rewardPoint: 0,
    rewardList: [],
  },
  reFetchList: async () => {},
  reFetchPoint: async () => {},
});

export const RewardContextProvider = ({ children }: PropsWithChildren) => {
  const [rewardInfo, setRewardInfo] = useState<UserRewardType>({
    rewardPoint: 0,
    rewardList: [],
  });

  const fetchRewardPoint = async () => {
    try {
      const res = await getRewardPoints();
      setRewardInfo((prev) => ({ ...prev, rewardPoint: res }));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRewardList = async (category: string) => {
    try {
      const res = await getRewardListByCategory(category);
      const listStates = await getUserRewardStatus();
      if (res instanceof Array) {
        const rewardList = res?.map((outerV) => {
          const findVal = listStates.find((innerV) => innerV.rewardId === outerV.id);
          if (findVal) return { ...outerV, ...findVal };
          return {
            ...outerV,
            rewardId: 0,
            progress: 0,
            status: "in_progress",
          };
        });
        setRewardInfo((prev) => ({ ...prev, rewardList }));
      }
    } catch (error) {
      console.error("카테고리 리스트 에러", error);
    }
  };

  const reFetchPoint = async () => await fetchRewardPoint();

  const reFetchList = async (category: string) => await fetchRewardList(category);

  useEffect(() => {
    (async () => {
      await fetchRewardPoint();
    })();
  }, []);

  return <RewarContext.Provider value={{ rewardInfo, reFetchList, reFetchPoint }}>{children}</RewarContext.Provider>;
};

export const useReward = () => useContext(RewarContext);
