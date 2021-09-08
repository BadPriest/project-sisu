import styled from "styled-components";

export const StyledSortControlWrapper = styled.li`
  display: inline-block;
`;

export const StyledSortControlsWrapper = styled.ul`
  padding: 0;
  list-style-type: none;

  & ${StyledSortControlWrapper} {
    margin-right: 1em;
  }
`;
