import React, {FC} from 'react';
import Logo from './Logo';
import Button, {btnColors} from "./common/Button";
import cartSVG from '../assets/img/svg/cart.svg';
import {ReactSVG} from "react-svg";

const Navbar: FC = () => {

  return (
    <header className="header">
      <div className="header__container container">
        <Logo/>
        <Button color={btnColors.accent} href={'/cart'} classes="header-cart">
          <span className="header-cart__total">520 ₽</span>
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
