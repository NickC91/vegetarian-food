import { configureStore } from "@reduxjs/toolkit";
import ApiReducer from './reducers/ApiReducer'

export const Store = configureStore({
  reducer: {
    recipes: ApiReducer
  }
})