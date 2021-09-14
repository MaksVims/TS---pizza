import React, {FC} from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={450}
      viewBox="0 0 300 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="400" y="165" rx="3" ry="3" width="88" height="6" />
      <circle cx="134" cy="132" r="130" />
      <rect x="10" y="275" rx="10" ry="10" width="260" height="24" />
      <rect x="0" y="308" rx="10" ry="10" width="280" height="85" />
      <rect x="258" y="269" rx="0" ry="0" width="0" height="1" />
      <rect x="175" y="407" rx="10" ry="10" width="104" height="30" />
      <rect x="3" y="407" rx="10" ry="10" width="94" height="30" />
    </ContentLoader>
  );
};

export default PizzaLoader;
