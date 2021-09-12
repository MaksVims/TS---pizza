export interface ISortCategory {
  name: string,
  value: string
}

export interface IFilterCategory {
  name: string,
  value: string
}


export interface FilterState {
  sortCategories: ISortCategory[],
  filtersCategories: IFilterCategory[]
  currentSort: ISortCategory,
  currentFilter: string,
}

export enum FilterTypeActions {
  'SET_FILTER_CATEGORY' = 'SET_FILTER_CATEGORY',
  'SET_SORT_CATEGORY' = 'SET_SORT_CATEGORY'
}

interface setSortCategoryAction {
  type: FilterTypeActions.SET_SORT_CATEGORY,
  payload: ISortCategory
}

interface setFilterCategoryAction {
  type: FilterTypeActions.SET_FILTER_CATEGORY,
  payload: string
}

export type FilterAction = setFilterCategoryAction | setSortCategoryAction
