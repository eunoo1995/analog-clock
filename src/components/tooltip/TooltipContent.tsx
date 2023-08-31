import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { tooltipState } from "../../recoil/tooltipState";

const TooltipContent = () => {
  const { isShow, content } = useRecoilValue(tooltipState);

  if (!isShow) return null;

  return <StyledTooltipContent>{content}</StyledTooltipContent>;
};

export default TooltipContent;

const StyledTooltipContent = styled.p`
  font-weight: bold;
  padding: 4px 8px;
  color: #fff;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.7);
`;
