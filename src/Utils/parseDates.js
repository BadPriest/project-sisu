import moment from "moment";

export const parseDateForDisplay = (
  date,
  formatsAre = ["YYYY-MM-DD"],
  formatTo = "DD.MM.YYYY"
) => (date ? moment(date, [...formatsAre]).format(formatTo) : "--");

export default parseDateForDisplay;
