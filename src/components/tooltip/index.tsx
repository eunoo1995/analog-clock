import { styled } from "styled-components";
import TooltipContent from "./TooltipContent";
import { useEffect, useRef } from "react";

const Tooltip = () => {
  const tooltipEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!tooltipEl.current || tooltipEl.current.children.length === 0) return;

      tooltipEl.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <StyledTooltip ref={tooltipEl}>
      <TooltipContent />
    </StyledTooltip>
  );
};

export default Tooltip;

const StyledTooltip = styled.div`
  position: fixed;
  top: -30px;
  left: 0;
  z-index: 100;
`;
