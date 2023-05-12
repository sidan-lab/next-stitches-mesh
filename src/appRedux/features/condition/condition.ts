import { useAppDispatch, useAppSelector } from '@src/appRedux/hooks'
import { setShowOrHide } from './conditionSlice'

class ConditionRedux {
  dispatch = useAppDispatch()

  isShowWallet = useAppSelector((state) => state.condition.showConnect)

  showWallet() {
    this.dispatch(setShowOrHide(true))
  }

  hideWallet() {
    this.dispatch(setShowOrHide(false))
  }
}

export const useShowWallet = () => {
  return new ConditionRedux()
}
