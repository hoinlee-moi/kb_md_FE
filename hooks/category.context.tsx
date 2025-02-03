"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

type CategoryContextType = {
  category: string;
  setCategory: (cate: string) => void;
};

const CategoryContext = createContext<CategoryContextType>({
  category: "",
  setCategory: () => {},
});

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [category, setCate] = useState<string>("");

  const setCategoryHandler = (cate: string) => setCate(cate);

  return (
    <CategoryContext.Provider
      value={{ category, setCategory: setCategoryHandler }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
