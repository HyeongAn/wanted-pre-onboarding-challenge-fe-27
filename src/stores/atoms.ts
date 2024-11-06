import { atom } from "recoil";
import { IAuth } from "../types";

export const authState = atom<IAuth>({
  key: "authState",
  default: {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  },
});
