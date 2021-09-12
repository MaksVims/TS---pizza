import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import classnames from 'classnames'

export enum btnColors {
  black = 'black',
  dark = 'dark',
  accent = 'accent',
  grey = 'grey',
  light = 'light'
}

export enum btnType {
  circle = 'circle',
  default = 'default'
}

interface ButtonProps {
  type?: btnType,
  color: btnColors,
  onClick?: () => void,
  href?: string,
  classes?: string,
  activeClass?: string
}

const Button: FC<ButtonProps> = (
  {children, color, type = btnType.default, ...props}
) => {

  const btnClasses = classnames({
    'btn': type === btnType.default,
    'btn-circle': type === btnType.circle,
    'btn--black': color === btnColors.black,
    'btn--light': color === btnColors.light,
    'btn--accent': color === btnColors.accent,
    'btn--dark': color === btnColors.dark,
    'btn--grey': color === btnColors.grey,
  })

  const allClasses = [btnClasses]
  if (props.activeClass) {
    allClasses.push(props.activeClass)
  }
  if (props.classes) {
    allClasses.push(props.classes)
  }

  if (props.href) {
    return (
      <NavLink
        to={props.href} className={allClasses.join(' ')}>
        {children}
      </NavLink>
    )
  }

  return (
    <button
      className={allClasses.join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
