import styled from "styled-components";

import { Text } from "../../Text";
import { TextHero } from "../../TextHero";

export const StyledWrapper = styled.div`
  display: grid;

  grid-template-columns: fit-content(30%) auto;
  grid-template-areas: "icon content";
  gap: 1em;

  max-width: 80%;
  margin: auto;
`;

export const StyledIconWrapper = styled.div`
  grid-area: icon;
  justify-self: center;
  align-self: center;

  display: flex;
  flex-direction: column;

  padding: 1em;
  border-radius: ${({ theme }) => theme.common.borderRadius.card};
  background-color: ${({ theme }) => theme.colors.text};

  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);

  transition: ${({ theme }) =>
    `${theme.animation.surface.activationTransition} ease-out`};

  &:hover {
    box-shadow: 0px 10px 13px -7px #00000066,
      12px 10px 14px -8px rgba(103, 103, 103, 0);

    transform: translateY(-1px);

    transition: ${({ theme }) =>
      `${theme.animation.surface.activationTransition} ease-in`};
  }

  & * {
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export const StyledTextWrapper = styled.div`
  grid-area: content;

  border: 0.1em dashed ${({ theme }) => theme.colors.text};
  border-left: 0.3em solid;

  padding: 1em;
  background-color: transparent;

  transition: ${({ theme }) =>
    `${theme.animation.surface.activationTransition} ease-in`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    transition: ${({ theme }) =>
      `${theme.animation.surface.activationTransition} ease-out`};
  }
`;

export const StyledIconText = styled(TextHero)`
  margin: 0;
  margin-top: 0.5rem;
`;

export const StyledTitle = styled(TextHero)`
  margin: 0;
  margin-bottom: 0.5em;
`;

export const StyledBody = styled(Text)`
  margin: 0;
`;

export default StyledWrapper;
