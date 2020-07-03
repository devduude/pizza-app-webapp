import { connect } from 'react-redux';

import BasketPage from './BasketPage.jsx';
import switchCurrency from '../Home/actions.js';
import {
  resetOrder,
  updateAddress,
  updateFirstName,
  updateLastName,
  updatePhone,
} from './actions.js';


const mapStateToProps = (state) => ({
  currency: state.home.currency,
  itemsPriceUSD: state.basket.itemsPriceUSD,
  itemsPriceEUR: state.basket.itemsPriceEUR,
  deliveryCostEUR: state.basket.deliveryCostEUR,
  deliveryCostUSD: state.basket.deliveryCostUSD,
  firstName: state.basket.firstName,
  lastName: state.basket.lastName,
  phone: state.basket.phone,
  address: state.basket.address,
  orderItems: state.basket.orderItems,
  basketItemsCount: state.basket.orderItems.length,
});

const mapDispatchToProps = {
  switchCurrency,
  resetOrder,
  updateAddress,
  updateFirstName,
  updateLastName,
  updatePhone,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPage);
