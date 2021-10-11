import React from "react";

import { Separator } from "../../../View/Shared/Separator";

import { StyledFooter, StyledInfo, StyledInfoHero } from "./styles";

export const Footer = () => (
  <StyledFooter>
    <StyledInfoHero>PROJECT SISU | be excellent</StyledInfoHero>
    <Separator height="0.2em" />
    <StyledInfo>Made with care, built to last.</StyledInfo>
    <Separator height="0.6em" />
    <StyledInfo>
      <b>Bruno Vinicius Vergatti, 2021</b>
    </StyledInfo>
  </StyledFooter>
);

export default Footer;
