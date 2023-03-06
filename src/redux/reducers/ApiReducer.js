import { createSlice } from '@reduxjs/toolkit'
import instance from '../../Api'

const initialState = {
  loading: true,
  error: {
    status: false,
    message: "",
  },
  information: [],
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
      state.information = []
    },
    stopLoading: (state) => {
      state.loading = false
    },
    saveDate: (state, action) => {
      state.information = action.payload
    },
    catchError: (state, action) => {
      state.error.status = true
      state.error.message = action.payload
      state.information = []
    },
    cleanError: (state) => {
      state.error.status = false
      state.error.message = ''
    },
  }
})

const { startLoading, saveDate, stopLoading, catchError, cleanError } = apiSlice.actions
const { reducer } = apiSlice

export const fetchData = (path) => async (dispatch) => {
  dispatch(startLoading())
  dispatch(cleanError())
  try {
    const res = await instance.get(path)
    console.log(res)
    dispatch(saveDate(res.data))
  } catch (error) {
    dispatch(catchError(error.message))
  }
  dispatch(stopLoading())
}

export default reducer