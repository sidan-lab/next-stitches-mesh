import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConditionState {
  showConnect: boolean
}

export const initialState: ConditionState = {
  showConnect: false
}

export const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setShowOrHide: (state, action: PayloadAction<boolean>) => {
      state.showConnect = action.payload
    }
  }
})

export const { setShowOrHide } = conditionSlice.actions

export default conditionSlice.reducer
