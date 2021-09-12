import React, {FC} from 'react';
import {ICategoryFilter} from "../../core/types/filter";
import List from "../common/List";
import FilterCategoryItem from "./FilterCategoryItem";

const Filters: FC = () => {
  const categoryFilters: ICategoryFilter[] = [
    {value: "закрытые"},
    {value: "острые"},
    {value: "мясные"},
    {value: "вегетарианская"},
    {value: "гриль"},
  ]

  return (
    <div className="products__options options">
      <List
        items={categoryFilters}
        classes={'options__filters-list'}
        renderItem={(item) => <FilterCategoryItem item={item} key={item.value}/>}
      >
        <FilterCategoryItem item={{value: 'Все'}}/>
      </List>
    </div>
  );
};

export default Filters;
