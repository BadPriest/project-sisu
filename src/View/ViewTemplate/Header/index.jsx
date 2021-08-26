import * as React from "react";

import { StyledHeaderWrapper, StyledHeaderTitle, StyledSlogan } from "./styles";

export const Header = () => (
  <StyledHeaderWrapper>
    <StyledHeaderTitle>
      Project Sisu
      <StyledSlogan>{` | `}be excellent.</StyledSlogan>
    </StyledHeaderTitle>
  </StyledHeaderWrapper>
);

export default Header;
