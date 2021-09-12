import React, {FC} from 'react';
import Filters from "../components/Filters/Filters";

const ProductPage: FC = () => {
  return (
    <section className="products">
      <div className="products__container container">
        <Filters/>
      </div>
    </section>
  );
};

export default ProductPage;
