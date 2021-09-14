import React, {FC, useEffect} from 'react';
import Filters from "../components/Filters/Filters";
import List from "../components/common/List";
import {useTypedSelector} from "../core/hooks/useTypedSelector";
import ProductPizzaItem from "../components/ProductPizzaItem";
import {useActions} from "../core/hooks/useActions";
import {filterPizzaByCategory, sortPizzaByFilter} from "../core/utils/sortFunction";
import PizzaLoader from "../components/PizzaLoader";
import {getArray} from '../core/utils/productHelper';
import Navbar from "../components/Navbar";

const ProductPage: FC = () => {
  const {pizzas, filteredPizzas, loading} = useTypedSelector(state => state.pizza)
  const {currentSort, currentFilter} = useTypedSelector(state => state.filter)
  const {setFilteredPizzas, fetchPizzas} = useActions()

  useEffect(() => {
    fetchPizzas()
  }, [])

  useEffect(() => {
    const filteredPizzasByCategory = filterPizzaByCategory(pizzas, currentFilter)
    setFilteredPizzas(sortPizzaByFilter(filteredPizzasByCategory, currentSort.value))
  }, [currentSort, currentFilter, pizzas])

  return (
    <>
      <Navbar/>
      <section className="products">
        <div className="products__container container">
          <Filters/>
          <h2 className="products__title title">Все пиццы</h2>
          {loading ?
            <List items={getArray(8)} renderItem={() => (
              <PizzaLoader/>
            )}/>
            :
            <List
              items={filteredPizzas}
              classes="products__grid"
              renderItem={(item) => (
                <ProductPizzaItem pizza={item} key={item.id}/>
              )}
            />
          }
        </div>
      </section>
    </>
  );
};

export default ProductPage;
