/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { PropTypes } from "prop-types";

import { Icons } from "../Icons";
import { Label } from "../FormControlLabel";

import { StyledWrapper, StyledSearchInput } from "./styles";

export const InputSearch = ({
  id,
  name,
  label,
  placeholder,
  setQuery,
  disabled,
  autoFocus,
}) => (
  <StyledWrapper>
    <Label htmlFor={id}>{label}</Label>
    <StyledSearchInput
      autoFocus={autoFocus}
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={setQuery}
      disabled={disabled}
    />
    <Icons icon="search" size="lg" />
  </StyledWrapper>
);

InputSearch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

InputSearch.defaultProps = {
  id: "",
  name: "",
  label: "",
  placeholder: "",
  disabled: false,
  autoFocus: true,
};

export default InputSearch;
