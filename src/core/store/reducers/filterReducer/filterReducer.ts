import {FilterAction, FilterState, FilterTypeActions} from "./filter.type";

const initialState: FilterState = {
  sortCategories: [
    {name: 'популярности', value: 'rating'},
    {name: 'цене', value: 'price'},
    {name: 'алфавиту', value: 'name'},
  ],
  filtersCategories: [
    {name: 'мясные', value: 'мясные'},
    {name: 'вегетарианская', value: 'вегетарианская'},
    {name: 'гриль', value: 'гриль'},
    {name: 'острые', value: 'острые'},
    {name: 'закрытые', value: 'закрытые'},
  ],
  currentSort: 'rating',
  currentFilter: ''
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterTypeActions.SET_SORT_CATEGORY:
      return {...state, currentSort: action.payload}
    case FilterTypeActions.SET_FILTER_CATEGORY:
      return {...state, currentFilter: action.payload}
    default:
      return state
  }
}
