import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";

import { Theme } from "./Theme";
import { ViewTemplate } from "../View/ViewTemplate";
import { Home } from "../View/Home";

import { StyledAppWrapper } from "./styles";

function App() {
  return (
    <StyledAppWrapper>
      <ThemeProvider theme={Theme}>
        <ViewTemplate>
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        </ViewTemplate>
      </ThemeProvider>
    </StyledAppWrapper>
  );
}

export default App;
