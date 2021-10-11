import styled, { css } from "styled-components";

const ResetButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;
  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
`;

export const SortingButton = styled(ResetButton)`
  transition: ${({ theme }) =>
    `${theme.animation.surface.activationTransition} ease-out`};

  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;

  text-transform: uppercase;

  padding: 0.5em 2em;

  color: ${({ theme }) => theme.colors.mutedText};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 0 0 0 rgba(66, 66, 66, 0.08),
    0 3px 3px 1px rgba(66, 66, 66, 0.16);

  border-radius: 0.8em;

  &:hover {
    &:not(:disabled) {
      box-shadow: 0px 10px 13px -7px #00000066,
        12px 10px 14px -8px rgba(103, 103, 103, 0);

      transform: translateY(-1px);

      transition: ${({ theme }) =>
        `${theme.animation.surface.activationTransition} ease-in`};
    }
  }

  &:disabled {
    color: ${({ theme }) =>
      theme.colors.mutedText + theme.common.opacities.regularOpacity};

    background-color: ${({ theme }) =>
      theme.colors.mutedText + theme.common.opacities.buttonDisabled};
  }

  ${({ isActive, theme }) => css`
    ${isActive &&
    css`
      color: ${(props) => props.theme.colors.surface};
      background-color: ${theme.colors.primary};
    `}

    ${!isActive &&
    css`
      color: ${(props) => props.theme.colors.mutedText};
    `}
  `}
`;

export default SortingButton;
