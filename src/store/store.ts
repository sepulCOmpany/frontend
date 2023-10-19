import { combineReducers, configureStore } from '@reduxjs/toolkit';
import grimzikReducer from './reducers/GrimzikSlice';
import sepulcaReducer from './reducers/SepulcaSlice';
import authReducer from './reducers/AuthSlice';

const rootReducer = combineReducers({
  grimzikReducer,
  authReducer,
  sepulcaReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];