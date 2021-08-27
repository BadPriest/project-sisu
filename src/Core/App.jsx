import React, { Suspense } from "react";

import { ViewTemplate } from "../View/ViewTemplate";
import { Home } from "../View/Home";

import { StyledAppWrapper } from "./styles";

function App() {
  return (
    <StyledAppWrapper>
      <ViewTemplate>
        <Suspense fallback={<>Loading...</>}>
          <Home />
        </Suspense>
      </ViewTemplate>
    </StyledAppWrapper>
  );
}

export default App;
