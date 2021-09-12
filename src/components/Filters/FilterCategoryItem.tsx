import React, {FC} from 'react';
import {ICategoryFilter} from "../../core/types/filter";
import Button, {btnColors} from "../common/Button";

interface FilterCategoryItemProps {
  item: ICategoryFilter,
  isActive: boolean,
  onClick: () => void
}

const FilterCategoryItem: FC<FilterCategoryItemProps> = ({item, isActive, onClick}) => {
  return (
    <li className="options__filters-item">
      <Button onClick={onClick} color={btnColors.grey} activeClass={isActive ? 'btn--dark-active' : ''}>
        {item.value}
      </Button>
    </li>
  );
};

export default FilterCategoryItem;
