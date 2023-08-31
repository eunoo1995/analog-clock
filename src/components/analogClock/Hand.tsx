import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { dateState } from "../../recoil/dateState";
import { getHandleAngle } from "../../utils/clock";

interface HandProps {
  type: "hour" | "minute" | "second";
}

const Hand = (props: HandProps) => {
  const { type } = props;

  const currentTime = useRecoilValue(dateState);
  const { hourAngle, minuteAngle, secondAngle } = getHandleAngle(currentTime);

  switch (type) {
    case "hour":
      return <StyledHourHand $angle={hourAngle} />;
    case "minute":
      return <StyledMinuteHand $angle={minuteAngle} />;
    case "second":
      return <StyledSecondHand $angle={secondAngle} />;
  }
};

export default Hand;

const StyledHand = styled.div<{ $angle: number }>`
  position: absolute;
  bottom: 50%;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
  transform-origin: bottom;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledHourHand = styled(StyledHand)`
  left: calc(50% - 5px);
  width: 10px;
  height: 100px;
  background-color: #0a0a5c;
`;

const StyledMinuteHand = styled(StyledHand)`
  left: calc(50% - 4px);
  width: 8px;
  height: 140px;
  background-color: black;
`;

const StyledSecondHand = styled(StyledHand)`
  left: calc(50% - 2px);
  width: 4px;
  height: 160px;
  background-color: red;
`;
