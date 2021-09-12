import React, {FC} from 'react';
import {ReactSVG} from "react-svg";
import ArrowSVG from '../../assets/img/svg/sort-arrow-down.svg';

const SortList: FC = () => {
  return (
    <div className="options__sort">
      <ReactSVG src={ArrowSVG} className="options__sort-svg"/>
      <span className="options__text">Сортировка по:</span>
    </div>
  );
};

export default SortList;
