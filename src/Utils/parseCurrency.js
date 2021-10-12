function getCurrencySign(currency) {
  if (!currency) {
    return "";
  }

  return currency.toLowerCase() === "eur" ? "€" : "$";
}

export const formatCurrency = (num, currency) =>
  getCurrencySign(currency) +
  num
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

export default formatCurrency;
