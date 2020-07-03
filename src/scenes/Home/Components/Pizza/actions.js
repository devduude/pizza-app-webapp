const updateOrderItems = (pizza) => ({
  type: 'UPDATE_ORDER_ITEMS',
  payload: pizza,
});

const updateItemsPriceUSD = (usd) => ({
  type: 'UPDATE_ITEMS_PRICE_USD',
  payload: usd,
});

const updateItemsPriceEUR = (eur) => ({
  type: 'UPDATE_ITEMS_PRICE_EUR',
  payload: eur,
});


export {
  updateOrderItems,
  updateItemsPriceUSD,
  updateItemsPriceEUR,
};
