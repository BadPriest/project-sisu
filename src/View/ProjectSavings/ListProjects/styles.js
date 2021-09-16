import styled from "styled-components";

export const StyledListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 470px));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;

  justify-content: space-evenly;
`;

export default StyledListWrapper;
