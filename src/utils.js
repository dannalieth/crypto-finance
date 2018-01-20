import currencyFormatter from 'currency-formatter';

export const formatPrice = (value) => {
  return currencyFormatter.format(value, {
    symbol: 'USD',
    decimal: '.',
    thousand: ',',
    precision: 2,
    format: '%v %s' // %s is the symbol and %v is the value
  });
}

export const formatCurrency = (value) => {
  return currencyFormatter.format(value, {
    symbol: '$',
    decimal: '.',
    thousand: ',',
    precision: 0,
    format: '%v' // %s is the symbol and %v is the value
  });
}