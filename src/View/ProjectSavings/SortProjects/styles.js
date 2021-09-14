import styled from "styled-components";

export const StyledSortControlWrapper = styled.li`
  display: inline-block;
`;

const UlReset = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const StyledSortControlsWrapper = styled(UlReset)`
  max-width: 100vw;
  display: flex;
  gap: 1rem;
`;
