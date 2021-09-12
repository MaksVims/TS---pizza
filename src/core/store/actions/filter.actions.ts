import {FilterAction, FilterTypeActions, ISortCategory} from "../reducers/filterReducer/filter.type";

export function setFilterCategory(filter: string): FilterAction {
  return {type: FilterTypeActions.SET_FILTER_CATEGORY, payload: filter}
}

export function setSortCategory(filter: ISortCategory): FilterAction {
  return {type: FilterTypeActions.SET_SORT_CATEGORY, payload: filter}
}
