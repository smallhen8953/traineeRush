import React, { useContext, useState, useEffect } from 'react';
import classes from '../../styles/Header.module.css';
import CartIcon from '../UI/CartIcon';
import { CartContext } from '../../context/Context';

function HeaderDeliveryButton() {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { totalQuantity, setDeliveryIsShown } = useContext(CartContext); 
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  // 讓結帳畫面顯示出來
  const showDeliveryHandler = () => {
    setDeliveryIsShown(true);
  };
  return (
    <button type="button" className={btnClasses} onClick={showDeliveryHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
    </button>
  );
}

export default HeaderDeliveryButton;
