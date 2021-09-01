import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 1.5rem;
`;

export const StyledHeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  font-size: clamp(1rem, 1rem + 10vw, 2.5rem);
  margin: 0.4rem 1.5rem;
`;

export const StyledSlogan = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;
