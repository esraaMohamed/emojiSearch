import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { searchReducer } from './searchTerm/searchTermSlice';

export type State = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    searchTerm: searchReducer
});

export const store = configureStore({
    reducer: rootReducer
})