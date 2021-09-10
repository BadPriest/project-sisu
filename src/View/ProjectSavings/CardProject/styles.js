import styled from "styled-components";
import { Text } from "../../Shared/Text";

export const StyledCardHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: -2rem;

  overflow: hidden;
  text-overflow: ellipsis;

  & ${Text} {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.typography.headings.fontFamily};
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export default StyledCardHeader;
