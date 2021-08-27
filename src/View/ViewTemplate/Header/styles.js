import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  margin: 0;
  margin-top: 32px;
  min-height: 8px;
  box-sizing: border-box;

  background-color: #ccc5b9;
`;

export const StyledHeaderTitle = styled.h1`
  font-family: "montserratextrabold";
  font-weight: 800 !important;
  color: #403d39;
  margin: 0;
`;

export const StyledSlogan = styled.span`
  font-family: "montserratthin";
  font-weight: 100 !important;
  color: #403d39;
  margin: 0;
`;

export default StyledHeaderTitle;
