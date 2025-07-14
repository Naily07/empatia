/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

import { useTokenStore } from "../stores/tokenStore";
export const myAxios = axios.create({
  baseURL: API_BASE_URL,
//   withCredentials: false,
  headers: {
    "Content-Type": "application/ld+json", // ✅ Accepte par API Platform
  },
});

export const myAxiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

import { useAccountStore } from "../stores/accountStore";
// import useRefreshToken from "../hooks/useRefresh";

myAxiosPrivate.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      const prevRequest = error?.config;
      prevRequest.sent = true;
      const { setAccount } = useAccountStore.getState();
      const { setAccessToken, setRefreshToken } = useTokenStore.getState();

      try {
        // const res = await useRefreshToken();
        console.info("[AUTH] → Nouveau token obtenu :", res.status);

        if (res.statusText === "OK") {
          prevRequest.headers["Authorization"] = `Bearer ${res.data["access"]}`;
          setAccessToken(res.data["access"]);
          setAccount(res.data["access"]);
          return myAxiosPrivate(prevRequest);
        }
      } catch (error) {
        if (error.response.status === 401) {
          console.warn(
            "[AUTH] → Refresh token expiré. Déconnexion automatique."
          );
          console.log("SETACCount null");

          //   setAccessToken("");
          //   setRefreshToken("");
          setAccount(null);
        }
      }
    }

    return Promise.reject(error);
  }
);
