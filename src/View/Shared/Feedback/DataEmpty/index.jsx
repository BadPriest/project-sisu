import React from "react";
import { FeedbackBadOutcome } from "../BadOutcome";

export const FeedbackDataEmptyResponse = () => (
  <FeedbackBadOutcome
    title="No data available"
    motive="Server had no data."
    cta="Try again later?"
  />
);

export default FeedbackDataEmptyResponse;
