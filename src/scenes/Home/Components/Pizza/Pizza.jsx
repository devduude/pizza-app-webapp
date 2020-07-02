import React from 'react';
import PropTypes from 'prop-types';

import './pizza.styl';


const Pizza = (props) => {
  const {
    title,
    description,
    price,
    imageSRC,
  } = props;

  return (
    <div className="pizza_container">
      <img className="pizza_container__img" src={imageSRC} alt={title} />
      <div className="pizza_container__overlay pizza_container__overlay--blur">
        <p className="pizza_container__description">{description}</p>
      </div>
      <h5>{title.toUpperCase()}</h5>
      <p>{price.usd}</p>
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
  imageSRC: PropTypes.string,
};


export default Pizza;
