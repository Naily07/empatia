import { useAccountStore } from "../stores/accountStore";
import { myAxios } from "./axios";

export async function analyseResult(sessionId) {
  try {
    const response = await myAxios.get(`/sessions/${sessionId}`);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function analyseResultUpdate(sessionId, userId, emotions) {
  try {
    const response = await myAxios.patch(
      `/sessions/${sessionId}`,
      {
        user: userId,
        emotions: [...emotions],
      },
      {
        headers: {
          "Content-Type": "application/merge-patch+json", // si tu utilises API Platform par exemple
        },
      }
    );
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
