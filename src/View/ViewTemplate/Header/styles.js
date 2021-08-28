import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  margin: 0;
  margin-top: 32px;

  background-color: #ccc5b9;
`;

export const StyledHeaderTitle = styled.h1`
  color: ${(props) => props.theme.typography.bodyCopyColor};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export const StyledSlogan = styled.span`
  color: ${(props) => props.theme.typography.bodyCopyColor};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export default StyledHeaderTitle;
