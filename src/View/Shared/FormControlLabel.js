import styled from "styled-components";

export const Label = styled.label`
  display: block;
  min-width: 10em;
  opacity: 0.6;

  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.body.small.fontSize};

  margin-bottom: 1em;
`;

export default Label;
