import { connect } from 'react-redux';

import Pizza from './Pizza.jsx';
import {
  updateItemsPriceEUR,
  updateItemsPriceUSD,
  updateOrderItems,
} from './actions.js';

const mapStateToProps = (state) => ({ currency: state.home.currency });

const mapDispatchToProps = {
  updateItemsPriceEUR,
  updateItemsPriceUSD,
  updateOrderItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);
