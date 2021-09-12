import React, {FC} from 'react';
import {ISortCategory} from "../../core/store/reducers/filterReducer/filter.type";
import classnames from 'classnames'

interface SortCategoryItemProps {
  item: ISortCategory,
  currentSort: ISortCategory,
  onClick: (item: ISortCategory) => void
}

const SortCategoryItem: FC<SortCategoryItemProps> = ({item, currentSort, onClick}) => {
  const classes = classnames({
    'options__sort-item': true,
    'options__sort-item--current': currentSort.value === item.value
  })

  return (
    <li className={classes}>
      <button onClick={() => onClick(item)}>{currentSort.value !== item.value && 'по '}{item.name}</button>
    </li>
  );
};

export default SortCategoryItem;
