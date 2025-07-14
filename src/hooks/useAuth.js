/* eslint-disable no-useless-catch */
import { useCallback } from "react";
import { useAccountStore } from "../stores/accountStore";
import { Login } from "../api/account";
import { useTokenStore } from "../stores/tokenStore";
export default function useAuth() {
	const { account, setAccount } = useAccountStore();
	const { setAccessToken, setRefreshToken } = useTokenStore();
	const login = useCallback(
		async ({email, password}) => {
			try {
                console.log("ACCOUNT", email, password);
				const res = await Login(email, password);
                console.log("RESS", res);
                
				setAccessToken(res.data["token"]);
				setAccount(res.data["token"]);
				return res;
			} catch (error) {
				throw error;
			}
		},
		[setAccessToken, setAccount, setRefreshToken]
	);
	const logout = useCallback(() => {
		setAccount(null);
		setAccessToken("");
		setRefreshToken("");
	}, [setAccessToken, setAccount, setRefreshToken]);
	return {
		account,
		login,
		logout,
	};
}
