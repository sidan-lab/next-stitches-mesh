import { initAction } from '@src/actions'
import { mockStore } from 'test/mock/store'

const store = mockStore()

describe('appActions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('should dispatch action APP_INIT', () => {
    store.dispatch(initAction())
    expect(store.getActions()).toContainEqual({
      type: initAction.type
    })
  })
})
