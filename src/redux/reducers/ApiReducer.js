import { createSlice } from '@reduxjs/toolkit'
import instance from '../../Api'

const initialState = {
  loading: true,
  error: {
    status: false,
    message: "",
  },
  recipes: [],
  rateLimit: {
    request: 0,
    used: 0,
    left: 0,
  },
  query: {
    path: "",
    itemForPage: null,
    type: "",
    query: "",
  },
}

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
      state.recipes = {}
    },
    stopLoading: (state) => {
      state.loading = false
    },
    saveDate: (state, action) => {
      state.recipes = action.payload
    },
    saveQuery: (state, action) => {
      state.query = { ...action.payload }
    },
    catchError: (state, action) => {
      state.error.status = true
      state.error.message = action.payload
      state.recipes = {}
    },
    cleanError: (state) => {
      state.error.status = false
      state.error.message = ""
    },
    checkRateLimit: (state, action) => {
      state.rateLimit = {
        ...action.payload
      }
    },
    updatePage: (state, action) => {
      state.pagination = action.payload
    },
  }
})

const { startLoading, saveDate, stopLoading, catchError, cleanError, checkRateLimit, saveQuery, updatePage } = recipeSlice.actions

const { reducer } = recipeSlice

export const fetchData = (path) => async (dispatch, getState) => {
  dispatch(startLoading())
  dispatch(cleanError())
  try {
    const response = await instance.get(path)
    dispatch(saveDate(response.data))
    console.log(response)
    if (response?.data?.totalResults === 0) {
      dispatch(catchError('Nessuna ricetta trovata'))
      dispatch(stopLoading())
      return
    }
    dispatch(checkRateLimit({
      request: response.headers['x-API-Quota-Request'],
      used: response.headers['x-API-Quota-Used'],
      left: response.headers['x-API-Quota-Left'],
    }))
  } catch (error) {
    dispatch(catchError(error.message))
  }
  dispatch(stopLoading())
}

export { catchError, cleanError, saveQuery, updatePage, stopLoading }

export default reducer