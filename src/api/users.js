import { useAccountStore } from "../stores/accountStore";
import { myAxios } from "./axios";

export async function getUserByEmail(username) {
  try {
    const response = await myAxios.get(`/users?email=${username}`);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
