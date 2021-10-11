import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(to right, #94ecbe 0%, #84d2a9 61%, #76bd98 100%);

  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);

  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "title info";
`;

export const StyledHeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};

  font-size: 2.5rem;
  margin: auto .5em;
`;
