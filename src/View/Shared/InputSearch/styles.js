import styled from "styled-components";

import { BaseInput } from "../Input";

export const StyledWrapper = styled.div`
  grid-area: search;
  position: relative;

  & > span {
    position: absolute;
    display: block;
    user-select: none;

    color: ${({ theme }) => theme.colors.mutedText}66;
    font-size: 1.4em;

    right: 0.5em;
    top: 1.75em;
  }
`;

export const StyledSearchInput = styled(BaseInput)`
  min-width: 100%;
  margin: auto;
  padding-right: 1.5em;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText}cc;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 40em) {
      font-size: ${({ theme }) => theme.typography.body.regular.fontSize};
    }
  }

  &:disabled {
    color: ${({ theme }) =>
      theme.colors.mutedText + theme.common.opacities.regularOpacity};

    background-color: ${({ theme }) =>
      theme.colors.mutedText + theme.common.opacities.buttonDisabled};

    border-bottom: dashed;
  }
`;

export default StyledSearchInput;
