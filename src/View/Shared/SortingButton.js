import styled, { css } from "styled-components";

const ResetButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;
  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
`;

export const SortingButton = styled(ResetButton)`
  transition: 300ms ease-out;

  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-size: 0.9rem;
  cursor: pointer;

  padding: 0.5em 2em;

  color: ${(props) => props.theme.colors.mutedText};
  background-color: transparent;

  border: 0.1em solid ${(props) => props.theme.colors.text}88;
  border-radius: 0.8em;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}66;
    transition: background-color 400ms ease;
  }

  ${({ isActive, theme }) => css`
    ${isActive &&
    css`
      color: ${(props) => props.theme.colors.text};
      background-color: ${theme.colors.primary};
    `}

    ${!isActive &&
    css`
      color: ${(props) => props.theme.colors.mutedText};
    `}
  `}
`;

export default SortingButton;
