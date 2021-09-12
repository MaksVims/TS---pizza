import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import CartPage from './pages/CartPage';
import ProductPage from "./pages/ProductPage";

const AppRouter: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={ProductPage}/>
      <Route path='/cart' exact component={CartPage}/>
      <Redirect to='/'/>
    </Switch>
  );
};

export default AppRouter;
