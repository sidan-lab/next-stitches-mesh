import config from '@redux/config'
import { initialRouterState, routerReducer } from 'connected-next-router'
import { combineReducers } from '@reduxjs/toolkit'
import conditionReducer, { initialState as conditionState } from './condition/conditionSlice'

export const rootState = {
  condition: conditionState,
  router: initialRouterState(config.APP_HOST)
}

const rootReducer = combineReducers({
  condition: conditionReducer,
  router: routerReducer
})

export default rootReducer

export * from './condition/condition'
