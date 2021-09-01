import * as React from "react";

import { StyledHeaderWrapper, StyledHeaderTitle, StyledSlogan } from "./styles";

export const Header = () => (
  <StyledHeaderWrapper>
    <StyledHeaderTitle>
      SIEVO Assignment
      <StyledSlogan>
        {` `}project sisu{` | `}
      </StyledSlogan>
      <StyledSlogan>
        <i>be excellent.</i>
      </StyledSlogan>
    </StyledHeaderTitle>
  </StyledHeaderWrapper>
);

export default Header;
