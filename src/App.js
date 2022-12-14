import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const shownCartHandler = () =>{
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };


  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={shownCartHandler}/>
      <main>
        <Meals/>
      </main>
      
    </CartProvider>
  );
}

export default App;
