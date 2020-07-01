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
    <div className="Pizza_container">
      <img src={imageSRC} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

Pizza.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  imageSRC: PropTypes.string,
};


export default Pizza;
