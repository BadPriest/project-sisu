import styled from "styled-components";

export const BaseInput = styled.input`
  display: block;

  line-height: 2.2em;
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-size: ${(props) => props.theme.typography.headings.h3.fontSize};
  padding: 0 1em;

  outline: none;
  border: none;
  border-bottom: solid 0.3rem ${(props) => props.theme.colors.text}99;
  border-radius: 0.1rem;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.surface};
  transition: 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s ease-out;
    outline: none;
  }
`;

export default BaseInput;
