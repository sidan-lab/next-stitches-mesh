import config from '@src/config'
import { initialRouterState, routerReducer } from 'connected-next-router'
import { combineReducers } from '@reduxjs/toolkit'
import appReducer, { INITIAL_STATE as appState } from './appReducer'

export const rootState = {
  app: appState,
  router: initialRouterState(config.APP_HOST)
}

export type RootState = ReturnType<typeof rootReducer>
export type EmptyState = ReturnType<typeof Object>

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer
})

export default rootReducer
