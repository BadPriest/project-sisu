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
  font-size: 1.7em;

  right: 0.4em;
  top: 2em;
`;

export const StyledSearchInput = styled(BaseInput)`
  min-width: 100%;
  margin: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText}cc;
  }
`;

export default StyledSearchInput;
