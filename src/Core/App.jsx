import React, { Suspense } from "react";
import Fonts from "../Assets/Fonts";

import { ViewTemplate } from "../View/ViewTemplate";
import { Home } from "../View/Home";

import { StyledAppWrapper } from "./styles";

function App() {
  return (
    <StyledAppWrapper>
      <Suspense fallback={<>Loading...</>}>
        <Fonts />
      </Suspense>
      <ViewTemplate>
        <Suspense fallback={<>Loading...</>}>
          <Home />
        </Suspense>
      </ViewTemplate>
    </StyledAppWrapper>
  );
}

export default App;
