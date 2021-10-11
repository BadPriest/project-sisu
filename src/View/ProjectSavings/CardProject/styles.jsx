import styled, { css } from "styled-components";

import { BaseCard } from "../../Shared/Card";
import { Icons } from "../../Shared/Icons";

const ASIDE_COLOR_OFFSET = "66";

export const StyledCardHeader = styled.header`
  text-align: ${(props) => props.align || "start"};
`;

export const StyledAside = styled.aside`
  padding: 1em;
  grid-area: aside;

  ${({ theme, complexity }) => css`
    ${complexity === "simple" &&
    css`
      background-color: ${theme.colors.success}${ASIDE_COLOR_OFFSET};
      color: ${theme.colors.success};
    `}
    ${complexity === "moderate" &&
    css`
      background-color: ${theme.colors.warning}${ASIDE_COLOR_OFFSET};
      color: ${theme.colors.warning};
    `}
       ${complexity === "hazardous" &&
    css`
      background-color: ${theme.colors.danger}${ASIDE_COLOR_OFFSET};
      color: ${theme.colors.danger};
    `}
  `}
`;

export const StyledContent = styled.section`
  margin: 1.2em 1em 0 0;
  grid-area: content;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledProjectCard = styled(BaseCard)`
  display: grid;
  grid-template-columns: 35% auto;
  grid-template-areas: "aside content";

  min-width: 330px;
  max-width: 460px;

  gap: 1em;
`;

export const StyledIconInfoWrapper = styled.span`
  display: flex;

  & ${Icons} {
    width: 1em;
  }
`;
