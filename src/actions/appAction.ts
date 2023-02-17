import { createAction } from '@reduxjs/toolkit'

const APP_INIT = 'APP_INIT'
const DEMO = 'DEMO'
const DEMO_SUCCESS = 'DEMO_SUCCESS'

const initAction = createAction<undefined>(APP_INIT)
const demoAction = createAction<number>(DEMO)
const demoActionSuccess = createAction<number>(DEMO_SUCCESS)

export { initAction, demoAction, demoActionSuccess }
