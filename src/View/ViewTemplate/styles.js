import styled from "styled-components";

export const StyledTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.background};

  & > * {
    flex: 1 auto;
  }
`;

export const StyledContentWrapper = styled.section`
  flex: 100 auto;
  max-width: 100vw;
`;
