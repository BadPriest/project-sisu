import styled from "styled-components";

import { Label } from "../../Shared/FormControlLabel";

export const StyledSortControlWrapper = styled.li`
  display: inline-block;
`;

const UlReset = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const StyledLabel = styled(Label)`
  grid-area: label;
`;

export const StyledOptionsWrapper = styled.div`
  display: grid;
  grid-area: sort-tags;
  grid-template-columns: repeat(auto-fit, minmax(10em, 13em));
`;

export const StyledSortControlsWrapper = styled(UlReset)`
  display: grid;
  margin: 0;

  grid-template-rows: 1fr auto;
  grid-template-areas:
    "label"
    "sort-tags";
`;
