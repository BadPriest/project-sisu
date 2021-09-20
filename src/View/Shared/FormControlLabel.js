import styled from "styled-components";

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.body.small.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  opacity: 0.6;
`;

export default Label;
