import React, {FC, useEffect, useState} from 'react';
import {ReactSVG} from "react-svg";
import ArrowSVG from '../../assets/img/svg/sort-arrow-down.svg';
import {useTypedSelector} from "../../core/hooks/useTypedSelector";
import SortPopup from "./SortPopup";
import {ISortCategory} from "../../core/store/reducers/filterReducer/filter.type";
import classnames from 'classnames'
import {useActions} from "../../core/hooks/useActions";

const SortPanel: FC = React.memo(() => {
  const currentSort = useTypedSelector<ISortCategory>(state => state.filter.currentSort)
  const sortCategories = useTypedSelector<ISortCategory[]>(state => state.filter.sortCategories)
  const {setSortCategory} = useActions()
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false)
  const svgClass = classnames({
    'options__sort-svg': true,
    'sort-svg--rotate': isPopupOpen
  })

  const closePopup = () => setPopupOpen(false)
  const togglePopup = () => setPopupOpen(prev => !prev)
  const changedSortSelect = (item: ISortCategory) => {
    setSortCategory(item)
    togglePopup()
  }

  useEffect(() => {
    document.documentElement.addEventListener('click', closePopup)
    return () => {
      document.documentElement.removeEventListener('click', closePopup)
    }
  }, [])

  return (
    <div className="options__sort" >
      <ReactSVG src={ArrowSVG} className={svgClass}/>
      <span className="options__text">Сортировка по:</span>
      <button onClick={togglePopup} className="options__text--accent">{currentSort.name}</button>
      <SortPopup
        items={sortCategories}
        currentSort={currentSort}
        isOpen={isPopupOpen}
        onClick={(item) => changedSortSelect(item)}
      />
    </div>
  );
});

export default SortPanel;
