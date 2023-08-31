import { useSetRecoilState } from "recoil";
import { tooltipState } from "../recoil/tooltipState";

export const useTooltip = () => {
  const setTooltip = useSetRecoilState(tooltipState);

  const show = () => {
    setTooltip((prev) => ({ ...prev, isShow: true }));
  };

  const hidden = () => {
    setTooltip((prev) => ({ ...prev, isShow: false }));
  };

  const setContent = (content: string) => {
    setTooltip((prev) => ({ ...prev, content }));
  };

  return { show, hidden, setContent };
};
