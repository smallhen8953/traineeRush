import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/Context';
import classes from '../../styles/Cart.module.css';
import Modal from '../UI/Modal';
import Maps from './Map';


function Deliver() {
  const {
    setDeliverIsShown, dispatch,
  } = useContext(CartContext);


  // 隱藏結帳畫面
  const disableDeliverHandler = () => {
    setDeliverIsShown(false);
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={disableDeliverHandler} type="button">
        Close
      </button>
    </div>
  );

  return (
    <Modal onClose={disableDeliverHandler}>
      {/* 地圖 */}
      { !true
      && (
      <>
        <ul className={classes['cart-items']}> {/* 要調整css*/}
          <Maps/>
        </ul>

      </>
      )}
    </Modal>
  );
}

export default Deliver;
