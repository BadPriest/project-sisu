export const normalizeString = (value) =>
  // https://metring.com.br/javascript-substituir-caracteres-especiais
  value
    ? value
        .normalize("NFD")
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
        .toLowerCase()
    : value;

export default normalizeString;
