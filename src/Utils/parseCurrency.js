function getCurrencySign(currency) {
  const parsedCurrency = currency?.toLowerCase();

  if (!parsedCurrency || !["eur", "usd"].includes(parsedCurrency)) {
    return "";
  }

  return parsedCurrency === "eur" ? "€" : "$";
}

export const formatCurrency = (num, currency) =>
  getCurrencySign(currency) +
  num
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

export default formatCurrency;
