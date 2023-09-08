import React from 'react';
import classes from '../../styles/Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderDeliveryButton from './HeaderDeliveryButton';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Shoalter</h1>
        <HeaderCartButton />
        <HeaderDeliveryButton />
      </header>
    </>
  );
}

export default Header;
