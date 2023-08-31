import styled from "styled-components";
import clockUrl from "../../assets/clock.png";
import { useEffect, useRef } from "react";
import Hand from "./Hand";
import { useSetRecoilState } from "recoil";
import { dateState } from "../../recoil/dateState";
import { useTooltip } from "../../hooks/useTooltip";
import { getDateToTimeString } from "../../utils/clock";

const AnalogClock = () => {
  const setDateState = useSetRecoilState(dateState);
  const tooltip = useTooltip();
  const clockEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDateState(currentDate);
      tooltip.setContent(getDateToTimeString(currentDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledAnalogClock
      ref={clockEl}
      onMouseOver={tooltip.show}
      onMouseLeave={tooltip.hidden}
    >
      <Hand type="hour" />
      <Hand type="minute" />
      <Hand type="second" />
    </StyledAnalogClock>
  );
};

export default AnalogClock;

const StyledAnalogClock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  height: 500px;
  border: 4px solid #999;
  border-radius: 50%;
  background-image: url(${clockUrl});
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #999;
    border-radius: 50%;
    z-index: 100;
  }
`;
