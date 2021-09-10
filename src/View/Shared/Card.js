import styled, { css } from "styled-components";

const BaseCard = styled.article`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.surface};

  line-height: normal;
`;

export const Card = styled(BaseCard)`
  position: relative;
  min-width: 330px;
  max-width: 330px;
  min-height: 270px;
  max-height: 270px;

  padding: 2.5em 1em;
  border-radius: 0.3em;

  font-size: 0.9rem;

  overflow: hidden;
  isolation: isolate;
  transition: 0.2s ease;

  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);

  &:hover {
    z-index: 1;
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #00000066,
      12px 10px 14px -8px rgba(103, 103, 103, 0);
  }

  &:before {
    content: " ";
    display: inline-block;
    position: absolute;
    inset: 0;
    z-index: -1;
    height: 1.5em;

    ${({ theme, complexity }) => css`
      ${complexity === "simple" &&
      css`
        background-color: ${theme.colors.success};
        color: ${theme.colors.text};
      `}

      ${complexity === "moderate" &&
      css`
        background-color: ${theme.colors.warning};
        color: ${theme.colors.text};
      `}

      ${complexity === "hazardous" &&
      css`
        background-color: ${theme.colors.danger};
        color: ${theme.colors.background};
      `}
    `}
  }
`;

export default Card;
