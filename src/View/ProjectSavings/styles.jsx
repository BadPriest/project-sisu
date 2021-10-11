import styled from "styled-components";

export const StyledWrapper = styled.section``;

export const SectionHeader = styled.header``;

export const StyledControlsWrapper = styled.aside`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;
  grid-template-areas:
    "search"
    "sort";

  max-width: 50em;
`;

export const StyledContentWrapper = styled.section``;
