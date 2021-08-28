import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  line-height: 1em;
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export default Text;
