import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";

import { Theme } from "./Theme";
import { ViewTemplate } from "./ViewTemplate";

import { ProjectSavings } from "../View/ProjectSavings";

import { StyledAppWrapper } from "./styles";
import { FeedbackDataLoading } from "../View/Shared/Feedback/DataLoading";

function App() {
  return (
    <StyledAppWrapper>
      <ThemeProvider theme={Theme}>
        <ViewTemplate>
          <Suspense fallback={<FeedbackDataLoading/>}>
            <ProjectSavings />
          </Suspense>
        </ViewTemplate>
      </ThemeProvider>
    </StyledAppWrapper>
  );
}

export default App;
