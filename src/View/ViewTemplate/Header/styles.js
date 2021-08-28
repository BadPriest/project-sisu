import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  margin: 0;
  margin-top: 32px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledHeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export const StyledSlogan = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export default StyledHeaderTitle;
