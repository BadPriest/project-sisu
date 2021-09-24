/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { PropTypes } from "prop-types";

import { Label } from "../FormControlLabel";

import { StyledWrapper, StyledSearchInput, StyledIcons } from "./styles";

export const InputSearch = ({ id, name, label, placeholder, setQuery }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{label}</Label>
    <StyledSearchInput
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={setQuery}
    />
    <StyledIcons icon="search" size="lg" />
  </StyledWrapper>
);

InputSearch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

InputSearch.defaultProps = {
  id: "",
  name: "",
  label: "",
  placeholder: "",
};

export default InputSearch;
