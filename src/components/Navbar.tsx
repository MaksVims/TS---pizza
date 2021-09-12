import React, {FC} from 'react';
import Logo from './Logo';
import Button, {btnColors} from "./common/Button";
import cartSVG from '../assets/img/svg/cart.svg';
import {ReactSVG} from "react-svg";
import {useTypedSelector} from '../core/hooks/useTypedSelector'

const Navbar: FC = () => {
  const total = useTypedSelector(state => state.cart.total)

  return (
    <header className="header">
      <div className="header__container container">
        <Logo/>
        <Button color={btnColors.accent} href={'/cart'} classes="header-cart">
          <span className="header-cart__total">{total} ₽</span>
          <span className="header-cart__quantity">
            <ReactSVG className="header-cart__svg" src={cartSVG}/>
            <span>3</span>
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
