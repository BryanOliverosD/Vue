Vue.filter('currency-filter', (value, currency) => {
  return `${currency} ${value}`
});
