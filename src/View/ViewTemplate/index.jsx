import * as React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { StyledTemplateWrapper, StyledContentWrapper } from "./styles";

export const ViewTemplate = ({ children }) => (
  <StyledTemplateWrapper>
    <Header />
    <StyledContentWrapper>{children}</StyledContentWrapper>
    <Footer />
  </StyledTemplateWrapper>
);

ViewTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewTemplate;
