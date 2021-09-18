import styled, { css } from "styled-components";

export const TextHero = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text}dd;
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

export default TextHero;
