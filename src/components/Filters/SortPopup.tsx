import React, {FC} from 'react';
import {ISortCategory} from "../../core/store/reducers/filterReducer/filter.type";
import List from '../common/List';
import SortCategoryItem from "./SortCategoryItem";

interface SortPopupProps {
  items: ISortCategory[],
  currentSort: ISortCategory,
  onClick: (item: ISortCategory) => void
  isOpen: boolean
}

const SortPopup: FC<SortPopupProps> = ({items, currentSort, isOpen, onClick}) => {

  return (
    <List
      classes={`options__sort-list ${isOpen && "sort-list--active"} `}
      items={items}
      renderItem={(item) => (
        <SortCategoryItem
          onClick={onClick}
          item={item}
          currentSort={currentSort}
          key={item.value}
        />
      )}
    />
  );
};

export default SortPopup;
