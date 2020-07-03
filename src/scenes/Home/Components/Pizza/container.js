import { connect } from 'react-redux';
import Pizza from './Pizza.jsx';


const mapStateToProps = (state) => ({ currency: state.home.currency });

export default connect(
  mapStateToProps,
  null
)(Pizza);
