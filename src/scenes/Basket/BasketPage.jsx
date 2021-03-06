import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import './basketpage.styl';


const BasketPage = (props) => {
  const {
    switchCurrency,
    currency,
    itemsPriceUSD,
    itemsPriceEUR,
    deliveryCostEUR,
    deliveryCostUSD,
    firstName,
    lastName,
    phone,
    address,
    orderItems,
    resetOrder,
    updateAddress,
    updateFirstName,
    updateLastName,
    updatePhone,
    basketItemsCount,
  } = props;

  // eslint-disable-next-line no-undef
  const serverURL = process.env.SERVER_URL || SERVER_URL;

  const pizzas = orderItems.join(', ');
  const deliveryCost = currency == 'eur' ? `€${deliveryCostEUR}` : `$${deliveryCostUSD}`;
  const orderPrice = currency == 'eur' ? `€${itemsPriceEUR + deliveryCostEUR}` : `$${itemsPriceUSD + deliveryCostUSD}`;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !pizzas
      || !firstName
      || !lastName
      || !address
      || !phone
    ) return alert('You can not create an empty order!');

    const orderData = {
      orderID: uuid(),
      orderDate: new Date(),
      orderDetails: pizzas,
      firstName,
      lastName,
      address,
      phone,
      priceUSD: itemsPriceUSD + deliveryCostUSD,
      priceEUR: itemsPriceEUR + deliveryCostEUR,
    };

    const response = await fetch(`${serverURL}/order/insert`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    const parsedResponse = await response.json();

    const log = `${parsedResponse.statusCode}: ${parsedResponse.message}\n\n You can see list of all the orders here: ${serverURL}/orders`;

    alert(log);
    console.log(log);

    resetOrder();
  };

  return (
    <div className="basket_container">
      <div className="basket_container__topbar">
        <div className="basket_container__left_side">
          <RouterLink to="/" className="basket_container__title">
            Pizza place
          </RouterLink>
          <button
            onClick={switchCurrency}
            type="button"
            className="basket_container__currency"
          >
            {currency}
          </button>
        </div>
        <div className="basket_container__right_side">
          <span className="basket_container__basket_counter">
            (
            {basketItemsCount}
            )
          </span>
          <span className="basket_container__basket">
            Basket
          </span>
        </div>
      </div>

      <form className="basket_container__form">
        <h3>Address details</h3>
        <div>
          <p>First name</p>
          <input type="text" value={firstName} onChange={(e) => updateFirstName(e.target.value)} />
        </div>
        <div>
          <p>Last name</p>
          <input type="text" value={lastName} onChange={(e) => updateLastName(e.target.value)} />
        </div>
        <div>
          <p>Phone</p>
          <input type="number" value={phone <= 0 ? '' : phone} onChange={(e) => updatePhone(e.target.value)} />
        </div>
        <div>
          <p>Address</p>
          <input type="text" value={address} onChange={(e) => updateAddress(e.target.value)} />
        </div>
        <div>
          <br />
        </div>
      </form>

      <div>
        <h3>Order details</h3>
        <p>Items:</p>
        <p>{pizzas}</p>
        <p>
          Delivery cost:
          {' '}
          {deliveryCost}
        </p>
        <p>
          Total price:
          {' '}
          {orderPrice}
        </p>
      </div>

      <button type="button" onClick={handleFormSubmit}>Make an order</button>

    </div>
  );
};

BasketPage.propTypes = {
  currency: PropTypes.oneOf([ 'usd', 'eur' ]),
  switchCurrency: PropTypes.func,
  updateAddress: PropTypes.func,
  updateFirstName: PropTypes.func,
  updateLastName: PropTypes.func,
  updatePhone: PropTypes.func,
  resetOrder: PropTypes.func,
  orderItems: PropTypes.array,
  itemsPriceUSD: PropTypes.number,
  itemsPriceEUR: PropTypes.number,
  deliveryCostEUR: PropTypes.number,
  deliveryCostUSD: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  basketItemsCount: PropTypes.number,
};


export default BasketPage;
