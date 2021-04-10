import {createSlice} from '@reduxjs/toolkit';
import { State } from '../store';

export interface SearchTermState {
    searchTerm: string;
}

const searchInitialState = {
    searchTerm: ''
}

const setSearchTerm = (_state: SearchTermState, {payload}: {payload: string}) => {
    return {
        searchTerm: payload
    }
};

export const {reducer: searchReducer, actions: searchActions} = createSlice({
    name: 'search',
    initialState: searchInitialState,
    reducers: {
        setSearchTerm,
    },
});


export const getSearchTerm = (state: State) => state.searchTerm.searchTerm;