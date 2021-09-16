import styled, { css } from "styled-components";
import { Text } from "../Text";

export const StyledWrapper = styled.article`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  justify-content: start;

  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-size: ${({ theme }) => theme.typography.headings.h2.fontSize};

  ${({ small }) => css`
    ${small &&
    css`
      font-size: ${({ theme }) => theme.typography.headings.h4.fontSize};
    `}
  `}
`;

export const StyledLabel = styled(Text)`
  margin: 0;
  text-transform: capitalize;

  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
`;

export const StyledValue = styled(Text)`
  margin: 0;
  min-height: 1.2em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
`;

export default StyledWrapper;
