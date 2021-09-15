import React, {FC} from 'react';
import srcLogo from '../assets/img/logo-img.png';

const Logo: FC = React.memo(() => {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={srcLogo} alt="logo"/>
      </div>
      <div className="logo__content">
        <h1 className="logo__title">React Pizza</h1>
        <p className="logo__text">самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
});

export default Logo;
