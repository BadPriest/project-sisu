/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { PropTypes } from "prop-types";

import { Label } from "../FormControlLabel";

import { StyledWrapper, StyledSearchInput, StyledIcons } from "./styles";

export const InputSearch = ({
  id,
  name,
  label,
  placeholder,
  setQuery,
  disabled,
}) => (
  <StyledWrapper>
    <Label htmlFor={id}>{label}</Label>
    <StyledSearchInput
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={setQuery}
      disabled={disabled}
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
  disabled: PropTypes.bool,
};

InputSearch.defaultProps = {
  id: "",
  name: "",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputSearch;
