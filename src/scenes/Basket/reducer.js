const initialState = {
  orderItems: [],
  itemsPriceUSD: 0,
  itemsPriceEUR: 0,
  deliveryCostEUR: 7,
  deliveryCostUSD: 10,
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
};

function store (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };

    case 'UPDATE_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };

    case 'UPDATE_PHONE':
      return {
        ...state,
        phone: action.payload,
      };

    case 'UPDATE_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };

    case 'UPDATE_ORDER_ITEMS':
      return {
        ...state,
        orderItems: [ ...state.orderItems, action.payload ],
      };

    case 'UPDATE_ITEMS_PRICE_USD':
      return {
        ...state,
        itemsPriceUSD: state.itemsPriceUSD + action.payload,
      };

    case 'UPDATE_ITEMS_PRICE_EUR':
      return {
        ...state,
        itemsPriceEUR: state.itemsPriceEUR + action.payload,
      };

    case 'RESET_ORDER':
      return {
        orderItems: [],
        itemsPriceUSD: 0,
        itemsPriceEUR: 0,
        deliveryCostEUR: 7,
        deliveryCostUSD: 10,
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
      };

    default:
      return state;
  }
}


export default store;
