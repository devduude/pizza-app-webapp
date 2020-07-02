import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Pizza from './Components/Pizza/Pizza.jsx';

import './homepage.styl';


const HomePage = () => {
  const [ pizzaArray, addPizza ] = React.useState([]);

  // eslint-disable-next-line no-undef
  const serverURL = process.env.SERVER_URL || SERVER_URL;

  React.useEffect(() => {
    async function getPizzas () {
      const response = await fetch(`${serverURL}/pizza`);
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
    <div className="home_container">
      <div className="home_container__topbar">
        <span className="home_container__title">
          Pizza place
        </span>
        <RouterLink to="/basket" className="home_container__basket">
          Basket
        </RouterLink>
      </div>
      <div className="home_container__pizzas">
        {pizzaArray}
      </div>
    </div>
  );
};

HomePage.propTypes = {};


export default HomePage;
