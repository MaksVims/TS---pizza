import React, {FC} from 'react';
import {ICategoryFilter} from "../../core/types/filter";
import Button, {btnColors} from "../common/Button";

interface FilterCategoryItemProps {
  item: ICategoryFilter
}

const FilterCategoryItem: FC<FilterCategoryItemProps> = ({item}) => {
  return (
    <li className="options__filters-item">
      <Button color={btnColors.grey}>
        {item.value}
      </Button>
    </li>
  );
};

export default FilterCategoryItem;
