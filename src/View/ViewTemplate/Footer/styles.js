import styled from "styled-components";
import { Text } from "../../Shared/Text";

export const StyledWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  /* flex-flow: column wrap; */

  background-color: ${(props) => props.theme.colors.accent};
  padding: 0.5em;
`;

export const StyledFooterTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.headings.fontFamily};
  font-weight: ${(props) => props.theme.typography.headings.fontWeight};
  margin: 0;
`;

export const StyledFooterDescription = styled(Text)`
  color: white;
`;

export const StyledFooterAuthor = styled(Text)`
  color: white;
`;

export default StyledWrapper;
