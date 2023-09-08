import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContext } from './context/Context';
import ProductDetails from './components/Meals/ProductDetails';
import Deliver from './components/Deliver/Deliver';

function App() {
  const { cartIsShown, deliverIsShown, isLoading } = useContext(CartContext);
  return (
    <div className="App"> 
      {cartIsShown && <Cart />}
      {deliverIsShown && <Deliver />}
      <Header />
      {!isLoading && <Meals />}
      {/* <ProductDetails/> */}
    </div>
  );
}

export default App;
