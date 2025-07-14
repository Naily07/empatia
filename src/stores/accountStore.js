import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useAccountStore = create(
  persist(
    (set) => ({
      account: null,
      setAccount: (token) =>
        set(() => {
          console.log("TOKENDecode",  jwtDecode(token));
          if (token !== null) {
            const username = jwtDecode(token)?.username;
            const role = jwtDecode(token)?.roles?.[0] || "user";
            return { account: { username, role} };
          }
          return { account: null };
        }),
    }),
    { name: "account" }
  )
);
