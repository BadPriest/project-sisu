import styled from "styled-components";

export const StyledTemplateWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;

  display: grid;
  grid-template-rows: [header] 5em [main] auto [footer] 8em;
`;

export const StyledContentWrapper = styled.section`
  & > * {
    padding: 1.5em;
    min-height: 100%;
  }
`;
