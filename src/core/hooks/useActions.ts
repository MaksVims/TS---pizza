import {useDispatch} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import Actions from '../store/actions'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch>()
  return bindActionCreators(Actions, dispatch)
}
