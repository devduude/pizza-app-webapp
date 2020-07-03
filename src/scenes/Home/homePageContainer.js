import { connect } from 'react-redux';

import HomePage from './HomePage.jsx';
import switchCurrency from './actions.js';


const mapStateToProps = (state) => ({
  currency: state.home.currency,
  basketItemsCount: state.basket.orderItems.length,
});

const mapDispatchToProps = { switchCurrency };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
