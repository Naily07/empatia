import { myAxios } from "./axios";

export async function createEmotionUser(data) {
  try {
    const response = await myAxios.post("/emotions", {
      name: data.emotion,
      intesite: data.intesite,
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
