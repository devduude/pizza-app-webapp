import React from 'react';
// import PropTypes from 'prop-types';
import Pizza from './Components/Pizza/Pizza.jsx';

import './homepage.styl';


const HomePage = () => {
  const preparePizzas = () => {
    const pizzaArray = [
      <Pizza
        key="Bianca"
        title="Bianca"
        description="White sauce, 100% mozzerella, ham, bacon & onion"
        price={21}
        imageSRC="https://www.dominos.no/gallery/fmobile/517medium.png"
      />,
      <Pizza
        key="MARGHERITA"
        title="MARGHERITA"
        description="Pizza sauce and 100% mozzarella"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/522medium.png"
      />,
      <Pizza
        key="CLASSIC"
        title="CLASSIC"
        description="Pizza sauce, 100 % mozzarella, ham & mushrooms"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/519medium.png"
      />,
      <Pizza
        key="HOTPEPPERONI"
        title="HOT PEPPERONI"
        description="Pizza sauce, 100 % mozzarella, pepperoni & jalapeños"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/527medium.png"
      />,
      <Pizza
        key="CHEESYBACON"
        title="CHEESY BACON"
        description="Pizza sauce, 100 % mozzarella, cheddar & bacon"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/515medium.png"
      />,
      <Pizza
        key="NACHOLIBRE"
        title="NACHO LIBRE"
        description="Pizza sauce, 100% mozzarella, tomatoes, sweet corn, jalapeños, black olives, nacho chips & chili flakes"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/529medium.png"
      />,
      <Pizza
        key="VEGGIESUPREME"
        title="VEGGIE SUPREME"
        description="Pizza sauce, 100% mozzarella, onion, peppers, tomatoes, sweet corn, mushrooms & black pepper"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/534medium.png"
      />,
      <Pizza
        key="BAHAMAS"
        title="BAHAMAS"
        description="Pizza sauce, 100% mozzarella, ham, bacon & pineapple"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/516medium.png"
      />,
      <Pizza
        key="HOTSPICY"
        title="HOT & SPICY"
        description="Pizza sauce, 100% mozzarella, pepperoni, onion, jalapeños, black pepper & chilli flakes"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/525medium.png"
      />,
      <Pizza
        key="TACORAMA"
        title="TACORAMA"
        description="Pizza sauce, 100% mozzarella, jalapeños, minced beef, pepper, corn, nacho chips, oregano & taco spice"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/532medium.png"
      />,
      <Pizza
        key="PEPPERONIPASSION"
        title="PEPPERONI PASSION"
        description="Pizza sauce, 100% mozzarella, double pepperoni, topped with extra mozzarella"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/528medium.png"
      />,
      <Pizza
        key="SPICYCHICKEN"
        title="SPICY CHICKEN"
        description="Pizza sauce, 100% mozzarella, marinated chicken, peppers, mushrooms, jalapeños & chilli flakes"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/531medium.png"
      />,
      <Pizza
        key="MANHATTAN"
        title="MANHATTAN"
        description="Pizza sauce, 100% mozzarella, pepperoni, onion - topped with cheddar,  black pepper & chiliflake"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/520medium.png"
      />,
      <Pizza
        key="TENNESSEEBBQCHICKEN"
        title="TENNESSEE BBQ CHICKEN"
        description="BBQ sauce, 100% mozzarella, marinated chicken, onion & cheddar"
        price={25}
        imageSRC="https://www.dominos.no/gallery/fmobile/533medium.png"
      />,
    ];

    return pizzaArray;
  };

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
        {preparePizzas()}
      </div>
    </div>
  );
};

HomePage.propTypes = {};


export default HomePage;
