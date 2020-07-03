const initialState = { currency: 'usd' };

function store (state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_CURRENCY':
      return {
        ...state,
        currency: state.currency == 'usd' ? 'eur' : 'usd',
      };

    default:
      return state;
  }
}


export default store;
