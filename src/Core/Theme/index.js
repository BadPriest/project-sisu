import React from "react";
import { light } from "./color-presets";

const colors = light;

const typography = {
  fontWeights: {
    thin: 300,
    regular: 400,
    semibold: 500,
    bold: 600,
  },
  headings: {
    fontFamily: "bebas_neueregular",
    h1: { fontSize: "3rem", fontWeight: "800" },
    h2: { fontSize: "2rem", fontWeight: "800" },
    h3: { fontSize: "1.5rem", fontWeight: "800" },
    h4: { fontSize: "1.2rem", fontWeight: "800" },
    display: { fontSize: "4.5rem", fontWeight: "800" },
  },
  body: {
    fontFamily: "barlowlight",
    small: { fontSize: "0.8rem" },
    regular: { fontSize: "1rem" },
    large: { fontSize: "1.1rem" },
  },
};

export const Theme = { colors, typography };

export const useTheme = () => {
  const [theme, setTheme] = React.useState({
    colors,
    typography,
  });

  const changeTheme = (newTheme) => {
    setTheme({ typography, newTheme });
  };

  const newTheme = (props) => {
    setTheme({
      colors,
      typography,
      ...props,
    });
  };

  return { theme, changeTheme, newTheme };
};

export default useTheme;
