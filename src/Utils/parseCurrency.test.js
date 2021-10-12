import { formatCurrency } from "./parseCurrency";

const dollarSign = "$";
const euroSign = "€";

test("Parses EUR currency with EUR sign", () => {
  const current = 1250;
  const currency = "EUR";
  const expected = `${euroSign}1.250,00`;
  const actual = formatCurrency(current, currency);

  expect(actual).toBe(expected);
});

test("Parses USD currency with USD sign", () => {
  const current = 12500;
  const currency = "USD";
  const expected = `${dollarSign}12.500,00`;
  const actual = formatCurrency(current, currency);

  expect(actual).toBe(expected);
});

test("Null currency returns no currency sign", () => {
  const current = 17700;
  const currency = "";
  const expected = `17.700,00`;
  const actual = formatCurrency(current, currency);

  expect(actual).toBe(expected);
});

test("Unsupported currencies returns no specific sign", () => {
  const current = 17700;
  const currency = "BRL";
  const expected = `17.700,00`;
  const actual = formatCurrency(current, currency);

  expect(actual).toBe(expected);
});
