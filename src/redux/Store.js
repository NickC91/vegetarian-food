import { configureStore } from "@reduxjs/toolkit";
import ApiReducer from './reducers/ApiReducer'

const Store = configureStore({
  reducer: {
    data: ApiReducer
  }
})

export default Store