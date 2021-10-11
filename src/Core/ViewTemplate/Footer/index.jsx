import React from "react";

import { Separator } from "../../../View/Shared/Separator";
import { Icons } from "../../../View/Shared/Icons";

import { StyledFooter, StyledInfo, StyledInfoHero, StyledLink } from "./styles";

export const Footer = () => (
  <StyledFooter>
    <StyledInfoHero>PROJECT SISU | be excellent</StyledInfoHero>
    <Separator height="0.2em" />
    <StyledInfo>Made with care, built to last.</StyledInfo>
    <Separator height="0.6em" />
    <StyledInfo>
      <StyledLink
        href="https://www.linkedin.com/in/bruno-vinicius-vergatti-3b631266"
        target="_blank"
        rel="noreferrer noopener"
      >
        <b>Bruno Vinicius Vergatti, 2021</b>
        <Icons icon={["fab", "linkedin"]} padLeft size="lg" />
      </StyledLink>
    </StyledInfo>
  </StyledFooter>
);

export default Footer;
