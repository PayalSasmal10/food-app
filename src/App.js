import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const shownCartHandler = () =>{
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };


  return (
    <Fragment>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={shownCartHandler}/>
      <main>
        <Meals/>
      </main>
      
    </Fragment>
  );
}

export default App;
