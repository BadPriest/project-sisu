import styled from "styled-components";
import { StyledControlsWrapper as ProjectSavingsControlsHeader } from "../ProjectSavings/styles";

export const BaseInput = styled.input`
  display: block;

  font-size: 14px;
  line-height: 2.2rem;
  font-family: ${(props) => props.theme.typography.headings.fontFamily};

  outline: none;
  border: none;
  border-bottom: solid 0.15rem ${(props) => props.theme.colors.text}99;
  border-radius: 0.1rem;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.surface};
`;

// ? Styles variations based on where it's being presented.
// ? In theory, this can help us to mantain all the styles
// ? for a given element within a single file/module,
// ? instead of spreading through the application
// ! What's the impact on code-bundling when all styles
// ! are centralized like so?
export const Input = styled(BaseInput)`
  ${ProjectSavingsControlsHeader} & {
    max-height: 4rem;
    min-width: 50vw;
    grid-area: search;
  }
`;
