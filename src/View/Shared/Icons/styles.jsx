import styled, { css } from "styled-components";
import { padSize } from "./constants";

export const StyledWrapper = styled.span`
  display: inline-block;
  position: relative;

  && > svg {
    color: inherit;
    width: inherit;
  }

  ${({ padLeft, padRight }) => css`
    ${padLeft &&
    css`
      margin-left: ${padSize};
    `}

    ${padRight &&
    css`
      margin-right: ${padSize};
    `}
  `};
`;

export default StyledWrapper;
