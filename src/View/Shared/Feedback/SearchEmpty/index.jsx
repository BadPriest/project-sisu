import React from "react";

import { FeedbackBadOutcome } from "../BadOutcome";

export const FeedbackSearchEmpty = () => (
  <FeedbackBadOutcome
    title="no data found"
    motive="Current search returned no results."
    cta="Try another combination."
  />
);

export default FeedbackSearchEmpty;
