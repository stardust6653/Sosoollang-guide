import { atom, selector } from "recoil";

export const loginBoolean = atom({
  key: "loginBoolean",
  default: false,
});

export const logoutBoolean = selector({
  key: "logoutBoolean",
  get: ({ get }) => {
    const login = get(loginBoolean);

    return !login;
  },
  set: ({ set, get }, newValue) => {
    return newValue;
  },
});
