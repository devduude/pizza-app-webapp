import React from 'react';
// import PropTypes from 'prop-types';
import Pizza from './Components/Pizza/Pizza.jsx';

import './homepage.styl';


const HomePage = () => {
  const [ pizzaArray, addPizza ] = React.useState([]);

  React.useEffect(() => {
    async function getPizzas () {
      // eslint-disable-next-line no-undef
      const response = await fetch(`${SERVER_URL}/pizza`);
      const { payload: pizzas } = await response.json();

      for (const pizza of pizzas) {
        const pizzaComponent = (
          <Pizza
            imageSRC={pizza.imageSRC}
            key={pizza.key}
            title={pizza.title}
            description={pizza.description}
            price={{ usd: pizza.priceUSD, eur: pizza.priceEUR }}
          />
        );

        addPizza((pizzaArray) => [ ...pizzaArray, pizzaComponent ]);
      }
    }

    getPizzas();
  }, []);

  return (
    <div className="container">
      <div className="container__topbar">
        <span className="container__title">
          Pizza place
        </span>
        <span className="container__basket">
          Basket
        </span>
      </div>
      <div className="container__pizzas">
        {pizzaArray}
      </div>
    </div>
  );
};

HomePage.propTypes = {};


export default HomePage;
