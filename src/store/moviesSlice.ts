import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { SortType } from 'src/models/SortTypes';
import { IMovieStore, IStore, SortByIDs } from 'src/models/Store';

interface ISortMovies {
    payload: SortType,
}

const initialState: IMovieStore = {
    data: [],
    fetchStatus: '',
    limit: 10,
    offset: 0,
    sortBy: 'Release date',
    sortOrder: 'desc',
}

export const getMovies = createAsyncThunk('fetch-all-movies', async(args, { getState }) => {
    const state = getState() as IStore;
    const limit = `?limit=${state.movies.limit}`
    const offset = `&offset=${state.movies.offset}`
    const sortBy = state.movies.sortBy !== undefined ? `&sortBy=${SortByIDs[state.movies.sortBy]}` : ''
    const sortOrder = state.movies.sortOrder !== undefined ? `&sortOrder=${state.movies.sortOrder}` : ''
    const search = state.movies.search !== undefined ? `&search=${state.movies.search}` : ''
    const searchBy = state.movies.searchBy !== undefined ? `&searchBy=${state.movies.searchBy}` : ''
    const filter = state.movies.filter !== undefined ? `&filter=${state.movies.filter === 'all' ? '' : state.movies.filter}` : ''
    const params = limit + offset + sortBy + sortOrder + search + searchBy + filter;
    const response = await fetch('http://localhost:4000/movies' + params);
    return await response.json();
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        sortMovies: (state, action: ISortMovies) => {
            state.sortBy = action.payload;
        },
        filterMovies: (state, action) => {
            state.filter = action.payload;
        },
        removeMovie: (state, action) => {
            state.data = state.data.filter(movie => movie);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.fetchStatus = 'succeeded';
        })
        .addCase(getMovies.pending, (state) => {
            state.fetchStatus = 'pending';
        })
        .addCase(getMovies.rejected, (state) => {
            state.fetchStatus = 'failed'
        })
    }
})

export default moviesSlice;