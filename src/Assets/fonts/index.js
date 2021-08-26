import { createGlobalStyle } from "styled-components";

import MontserratRegular from "./Assets/Montserrat-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular}) format(truetype);
    }
`;
