import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './basketpage.styl';


const BasketPage = (props) => {
  const {
    sendOrder,
    orderPrice = 124123,
    pizzas,
  } = props;

  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName, setLastName ] = React.useState('');
  const [ phone, setPhone ] = React.useState(0);
  const [ address, setAddress ] = React.useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting the form');


  };

  return (
    <div className="basket_container">
      <div className="basket_container__topbar">
        <RouterLink to="/" className="basket_container__title">
          Pizza place
        </RouterLink>
        <span className="basket_container__basket">
          Basket
        </span>
      </div>

      <form className="basket_container__form">
        <h3>Address details</h3>
        <div>
          <p>First name</p>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <p>Last name</p>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <p>Phone</p>
          <input type="number" value={phone <= 0 ? '' : phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <p>Address</p>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <br />
        </div>
      </form>

      <div>
        <h3>Order details</h3>
        <p>Items:</p>
        <p>{pizzas}</p>
        <p>Total price:</p>
        <p>{orderPrice}</p>
      </div>

      <button type="button" onClick={handleFormSubmit}>Make an order</button>

    </div>
  );
};

BasketPage.propTypes = { sendOrder: PropTypes.func };


export default BasketPage;
