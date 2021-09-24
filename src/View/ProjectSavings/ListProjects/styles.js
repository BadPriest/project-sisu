import styled from "styled-components";

export const StyledListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 440px));
  grid-column-gap: 1.5rem;
  grid-row-gap: 5em;

  justify-content: space-evenly;
`;

export default StyledListWrapper;
