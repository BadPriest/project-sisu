import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  padding: 0 3%;
  color: ${(props) => props.theme.typography.bodyCopyColor};
`;

export default Container;
