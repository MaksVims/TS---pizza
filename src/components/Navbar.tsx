import React, {FC} from 'react';
import Logo from './Logo';
import Button, {btnColors} from "./common/Button";
import cartSVG from '../assets/img/svg/cart.svg';
import {ReactSVG} from "react-svg";
import {useTypedSelector} from '../core/hooks/useTypedSelector'
import { getTotalItems } from '../core/utils/cartHelpers';
import {useHistory} from "react-router-dom";

const Navbar: FC = () => {
  const {total, items} = useTypedSelector(state => state.cart)
  const history = useHistory()

  const btnCart = (
    <Button color={btnColors.accent} href={'/cart'} classes="header-cart">
      <span className="header-cart__total">{total} ₽</span>
      <span className="header-cart__quantity">
            <ReactSVG className="header-cart__svg" src={cartSVG}/>
            <span>{getTotalItems(items)}</span>
          </span>
    </Button>
  )

  return (
    <header className="header">
      <div className="header__container container">
        <Logo/>
        {history.location.pathname === '/' && btnCart}
      </div>
    </header>
  );
};

export default Navbar;
