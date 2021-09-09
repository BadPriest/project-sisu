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
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.4em 1.5em;
  border-radius: 0.8em;

  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  border: 0.1em solid ${(props) => props.theme.colors.text}88;

  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}66;
    transition: background-color 400ms ease;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;

export default SortingButton;
