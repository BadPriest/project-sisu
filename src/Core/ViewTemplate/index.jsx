import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "../../View/Shared/Container";

import { StyledTemplateWrapper } from "./styles";

export const ViewTemplate = ({ children }) => (
  <StyledTemplateWrapper>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </StyledTemplateWrapper>
);

ViewTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewTemplate;
