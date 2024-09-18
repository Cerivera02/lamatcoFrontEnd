import axios from "./axios";
import { User } from "../interface/login";

export const loginRequest = (user: User) => axios.post(`/login`, user);

export const checkAccess = async (endpoint: string): Promise<boolean> => {
  try {
    const response = await axios.get(`/${endpoint}`, { withCredentials: true });
    console.log("response check Access", response);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
