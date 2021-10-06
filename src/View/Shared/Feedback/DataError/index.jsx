import React from "react";
import { FeedbackBadOutcome } from "../BadOutcome";

export const FeedbackDataError = () => (
  <FeedbackBadOutcome
    title="Something went wrong"
    motive="Something unexpected ocurred."
    cta="Try again later or contact the administration."
  />
);

export default FeedbackDataError;
