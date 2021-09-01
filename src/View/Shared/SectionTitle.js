import styled from "styled-components";

export const SectionTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.h1.fontWeight};
  margin: 0;
`;

export default SectionTitle;
