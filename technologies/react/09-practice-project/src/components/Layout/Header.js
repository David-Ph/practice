import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css";

function Header(props) {
  return <Fragment>
    <header className={classes.header}>
      <h1>DelliMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious meals" />
    </div>
  </Fragment>
}

export default Header;
