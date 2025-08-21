import Api from "./axios";
import type { LoginResponse, ILogin } from "../types/auth.type";

const Login = async (data: ILogin) => {
  try {
    const response = await Api.post<LoginResponse>("/user/login", data);
    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

export const AuthApi = { Login };
