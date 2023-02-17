import reducer, { INITIAL_STATE } from '@src/reducers/appReducer'
import { initAction, demoActionSuccess } from '@src/actions'

describe('appReducer', () => {
  it('should handle initAction', () => {
    expect(reducer(INITIAL_STATE, initAction)).toEqual({
      ...INITIAL_STATE,
      ready: true
    })
  })
  it('should handle demoActionSuccess', () => {
    expect(reducer(INITIAL_STATE, demoActionSuccess(2))).toEqual({
      ...INITIAL_STATE,
      demoValue: 2
    })
  })
})
