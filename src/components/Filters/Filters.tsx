import React, {FC} from 'react';
import {ICategoryFilter} from "../../core/types/filter";
import List from "../common/List";
import FilterCategoryItem from "./FilterCategoryItem";
import {useTypedSelector} from "../../core/hooks/useTypedSelector";
import {useActions} from "../../core/hooks/useActions";
import SortPanel from "./SortPanel";

const Filters: FC = React.memo(() => {
  const categoryFilters = useTypedSelector<ICategoryFilter[]>(state => state.filter.filtersCategories)
  const currentFilter = useTypedSelector<string>(state => state.filter.currentFilter)
  const {setFilterCategory} = useActions()

  return (
    <div className="products__options options" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <List
        items={categoryFilters}
        classes={'options__filters-list'}
        renderItem={(item) => (
          <FilterCategoryItem
            item={item}
            key={item.value}
            onClick={() => setFilterCategory(item.value)}
            isActive={item.value === currentFilter}/>
        )
        }
      >
        <FilterCategoryItem
          item={{value: 'Все'}}
          isActive={currentFilter === ''}
          onClick={() => setFilterCategory('')}
        />
      </List>
      <SortPanel/>
    </div>
  );
});

export default Filters;
