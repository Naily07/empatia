import { myAxios } from "./axios";

export async function Login(email, password) {
  try {
    console.log("Account", email, password);

    const response = await myAxios.post("/login", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

export async function Register(data) {
  try {
    const response = await myAxios.post("/users", {
    ...data,
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
