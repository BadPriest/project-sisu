import styled from "styled-components";

export const StyledWrapper = styled.section``;

export const SectionHeader = styled.header`
  display: grid;
  grid-template-columns: 40% auto;
  align-items: end;
`;

export const StyledControlsWrapper = styled.aside`
  padding: 1.5em;

  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  grid-template-areas:
    "search"
    "sort";

  @media screen and (min-width: 60em) {
    grid-template-rows: 12% auto;
    grid-template-areas: "sort search";
  }
`;

export const StyledContentWrapper = styled.section``;
