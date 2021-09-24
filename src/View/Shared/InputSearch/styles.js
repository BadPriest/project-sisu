import styled from "styled-components";

import { BaseInput } from "../Input";
import { Icons } from "../Icons";

export const StyledWrapper = styled.div`
  grid-area: search;
  position: relative;
`;

export const StyledIcons = styled(Icons)`
  position: absolute;
  display: block;
  user-select: none;

  color: ${({ theme }) => theme.colors.mutedText}66;
  font-size: 1.8em;

  right: 0.5em;
  top: 1.45em;
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
`;

export default StyledSearchInput;
