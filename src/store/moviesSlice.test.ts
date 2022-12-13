import {configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import moviesSlice from './moviesSlice';

const actions = moviesSlice.actions;

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
    },
    middleware: [thunkMiddleware]
});

test('Dispatch sortMovies', async () => {
    store.dispatch(actions.sortMovies('Rating'));
    const state = store.getState();
    expect(state.movies.sortBy).toEqual('Rating');
});

test('Dispatch filterMovies', async () => {
    store.dispatch(actions.filterMovies('documentary'));
    const state = store.getState();
    expect(state.movies.filter).toEqual('documentary');
});