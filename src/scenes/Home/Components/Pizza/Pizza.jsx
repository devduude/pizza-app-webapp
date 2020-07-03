import React from 'react';
import PropTypes from 'prop-types';

import './pizza.styl';


const Pizza = (props) => {
  const {
    title,
    description,
    price,
    imageSRC,
    currency,
  } = props;

  const priceValue = currency == 'usd' ? `$${price.usd}` : `€${price.eur}`;

  return (
    <div className="pizza_container">
      <img className="pizza_container__img" src={imageSRC} alt={title} />
      <div className="pizza_container__overlay pizza_container__overlay--blur">
        <p className="pizza_container__description">{description}</p>
      </div>
      <p className="pizza_container__title">{title.toUpperCase()}</p>
      <div className="pizza_container__price_and_button">
        <span className="pizza_container__price">{priceValue}</span>
        <button className="pizza_container__button" type="button">Add to basket</button>
      </div>
    </div>
  );
};

Pizza.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.exact({
    usd: PropTypes.number,
    eur: PropTypes.number,
  }),
  currency: PropTypes.oneOf([ 'eur', 'usd' ]),
  imageSRC: PropTypes.string,
};


export default Pizza;
