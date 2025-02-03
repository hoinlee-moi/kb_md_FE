// "use client";
// import { createContext, PropsWithChildren, useContext, useState } from "react";

// type UserIdContextType = {
//   userId: string;
//   login: (id: string) => void;
// };

// const UserIdContext = createContext<UserIdContextType>({
//   userId: "",
//   login: () => {},
// });

// export const UserIdContextProvider = ({ children }: PropsWithChildren) => {
//   const [userId, setUserId] = useState("");

//   const login = (id: string) => setUserId(id);
//   return <UserIdContext.Provider value={{ userId, login }}>{children}</UserIdContext.Provider>;
// };

// export const useUserId = () => useContext(UserIdContext);
