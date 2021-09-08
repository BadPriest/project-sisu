import styled from "styled-components";

export const Input = styled.input`
  display: block;

  font-size: 14px;
  line-height: 2.2rem;
  font-family: ${(props) => props.theme.typography.headings.fontFamily};

  outline: none;
  border: none;
  border-bottom: solid 0.15rem ${(props) => props.theme.colors.text}99;
  border-radius: 0.1rem;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary}99;
`;

export default Input;
