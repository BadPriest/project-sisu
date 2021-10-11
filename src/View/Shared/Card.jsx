import styled from "styled-components";

const ResetCard = styled.article`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.surface};

  line-height: normal;
`;

export const BaseCard = styled(ResetCard)`
  position: relative;
  min-width: 330px;
  max-width: 330px;

  border-radius: 0.3em;

  font-size: 0.9rem;

  overflow: hidden;

  transition: ${({ theme }) =>
    `${theme.animation.surface.activationTransition} ease-in`};

  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #00000066,
      12px 10px 14px -8px rgba(103, 103, 103, 0);

    transition: ${({ theme }) =>
      `${theme.animation.surface.activationTransition} ease-out`};
  }
`;

export default BaseCard;
