import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerRegister from '../components/helpers/ReducerRegister';

export const store = configureStore({
  reducer: {
    ...reducerRegister.reducers,
  },
})

reducerRegister.setChangeListener((reducers) => {
  store.replaceReducer(
    combineReducers({
      ...reducers,
    }),
  )
})
