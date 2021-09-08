import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5em;
  min-height: 100%;

  color: ${(props) => props.theme.colors.text};
`;

export default Container;
