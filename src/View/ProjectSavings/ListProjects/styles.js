import styled from "styled-components";

export const StyledListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  & > * {
    flex: 0 1 24%;
  }
`;

export const StyledCard = styled.article`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.background};

  /* background-image: linear-gradient(
    41deg,
    #e7ffe0 10%,
    #ffffff 10%,
    #ffffff 50%,
    #e7ffe0 50%,
    #e7ffe0 60%,
    #ffffff 60%,
    #ffffff 100%
  );
  background-size: 7.62px 6.63px; */

  & > p {
    color: inherit;
    /* color: ${(props) => props.theme.colors.background}; */
  }
`;

export default StyledCard;
