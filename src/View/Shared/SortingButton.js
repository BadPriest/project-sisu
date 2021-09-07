import styled from "styled-components";

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
  padding: 0.4em 1.5em;
  margin: 1em;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border-radius: 1em 1em 1em 0;
  font-family: ${(props) => props.theme.typography.headings.fontFamily};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }
`;

export default SortingButton;
