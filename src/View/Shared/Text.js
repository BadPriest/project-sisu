import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1em;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-weight: ${({ theme }) => theme.typography.headings.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.large.fontSize};
  margin: 0;
`;

export default Text;
