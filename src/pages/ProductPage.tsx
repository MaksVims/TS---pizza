import React, {FC} from 'react';
import Filters from "../components/Filters/Filters";

const ProductPage: FC = () => {
  return (
    <section className="products">
      <div className="products__container container">
        <Filters/>
        <h2 className="products__title title">Все пиццы</h2>

      </div>
    </section>
  );
};

export default ProductPage;
