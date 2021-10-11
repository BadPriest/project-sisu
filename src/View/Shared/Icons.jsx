import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const padSize = "0.5em";

export const Icons = styled(FontAwesomeIcon)`
  ${({ padLeft, padRight }) => css`
    ${padLeft &&
    css`
      margin-left: ${padSize};
    `}

    ${padRight &&
    css`
      margin-right: ${padSize};
    `}
  `}
`;

export default Icons;
