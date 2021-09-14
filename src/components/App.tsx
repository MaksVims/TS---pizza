import React, {useEffect} from 'react';
import AppRouter from "../AppRouter";
import {useTypedSelector} from "../core/hooks/useTypedSelector";
import {useActions} from "../core/hooks/useActions";

function App() {
  const cartItems = useTypedSelector(state => state.cart.items)
  const {setTotalPrice} = useActions()

  useEffect(() => {
    setTotalPrice(cartItems)
  }, [cartItems])

  return (
    <div className="site-container">
      <div className="wrapper">
        <main className="main">
          <AppRouter/>
        </main>
      </div>
    </div>
  );
}

export default App;
