import styled from "styled-components";

export const StyledListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  margin: 0 auto;
`;

export default StyledListWrapper;
