import { myAxios } from "./axios";
export async function CreateSession() {
  const now = new Date();

  const dateISO = now.toISOString(); // ✅ Format ISO
  const heures = now.toTimeString().split(" ")[0]; // ✅ convertir en string
  const duree = parseFloat((Math.random() * 3).toFixed(1));

  try {
    const response = await myAxios.post("/sessions", {
      date: dateISO, // 👈 string ISO
      heures: heures, // 👈 entier
      duree: duree, // 👈 float
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
