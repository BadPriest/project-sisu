import moment from "moment";

export const parseDateForDisplay = (
  date,
  formatsAre = [moment.ISO_8601],
  formatTo = "DD.MM.YYYY"
) => (date ? moment.utc(date, [...formatsAre]).format(formatTo) : "--");

export const isValidDate = (value) =>
  value && moment(value, moment.ISO_8601, true).isValid();
