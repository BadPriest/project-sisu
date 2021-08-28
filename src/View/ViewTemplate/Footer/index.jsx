import * as React from "react";

import {
  StyledWrapper,
  StyledFooterTitle,
  StyledFooterDescription,
  StyledFooterAuthor,
} from "./styles";

export const Footer = () => (
  <StyledWrapper>
    <StyledFooterTitle>Project Sisu</StyledFooterTitle>
    <StyledFooterDescription>A Sievo assignment</StyledFooterDescription>
    <StyledFooterAuthor>Made by Bruno V Vergatti</StyledFooterAuthor>
  </StyledWrapper>
);

export default Footer;
