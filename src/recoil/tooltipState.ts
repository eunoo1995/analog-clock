import { atom } from "recoil";

export const tooltipState = atom({
  key: "tooltipState",
  default: {
    isShow: false,
    content: "",
  },
});
