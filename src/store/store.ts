import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import moviesSlice from './moviesSlice';

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
    },
    middleware: [thunkMiddleware]
});

export default store;