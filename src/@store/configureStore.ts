import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import {
  affiliateNetworksReducer,
  affiliateNetworksSlice,
} from './affiliate-networks/slice';
import { uiReducer, uiSlice } from './ui/slice';
// import { RESET_STATE_ACTION_TYPE } from './actions/resetState';

const logger = createLogger({
  collapsed: true,
});

const reducers = {
  //   [modalSlice.name]: modalReducer,
  //   [pokemonApi.reducerPath]: pokemonApi.reducer,
  [affiliateNetworksSlice.name]: affiliateNetworksReducer,
  [uiSlice.name]: uiReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  //   if (action.type === RESET_STATE_ACTION_TYPE) {
  //     state = {} as RootState;
  //   }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
