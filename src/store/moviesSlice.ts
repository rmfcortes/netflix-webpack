import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'src/models/Movie';

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

let lastParams = '';
let lastResponse: Response;

export const getMovies = createAsyncThunk('fetch-all-movies', async(_args, { getState }) => {
    const state = getState() as IStore;
    const params = getMoviesRequestParams(state);
    if (params !== lastParams) {
        lastParams = params;
        lastResponse = await fetch('http://localhost:4000/movies' + params);
    }
    return await lastResponse.json();
});

const getMoviesRequestParams = (state: IStore): string => {
    const limit = `?limit=${state.movies.limit}`
    const offset = `&offset=${state.movies.offset}`
    const sortBy = state.movies.sortBy !== undefined ? `&sortBy=${SortByIDs[state.movies.sortBy]}` : ''
    const sortOrder = state.movies.sortOrder !== undefined ? `&sortOrder=${state.movies.sortOrder}` : ''
    const search = state.movies.search !== undefined ? `&search=${state.movies.search}` : ''
    const searchBy = state.movies.searchBy !== undefined ? `&searchBy=${state.movies.searchBy}` : ''
    const filter = state.movies.filter !== undefined ? `&filter=${state.movies.filter === 'all' ? '' : state.movies.filter}` : ''
    return limit + offset + sortBy + sortOrder + search + searchBy + filter;
}

export const postMovie = createAsyncThunk('post-movie', async (movie: Movie, { getState }) => {
    const state = getState() as IStore;
    await fetch('http://localhost:4000/movies', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...movie, id: undefined, tagline: 'tag'})
    });
    const params = getMoviesRequestParams(state);
    const response = await fetch('http://localhost:4000/movies' + params);
    return await response.json();
});

export const editMovie = createAsyncThunk('edit-movie', async (movie: Movie, { getState }) => {
    const state = getState() as IStore;
    await fetch('http://localhost:4000/movies', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...movie })
    });
    const params = getMoviesRequestParams(state);
    const response = await fetch('http://localhost:4000/movies' + params);
    return await response.json();
});

export const deleteMovie = createAsyncThunk('delete-movie', async (movie: Movie, { getState }) => {
    const state = getState() as IStore;
    await fetch(`http://localhost:4000/movies/${movie.id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...movie })
    });
    const params = getMoviesRequestParams(state);
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
        clearAddedMovieState: (state) => {
            state.new_added = false;
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
        .addCase(postMovie.fulfilled, (state, action) => {
            state.new_added = true;
            state.data = action.payload.data;
            state.fetchStatus = 'succeeded';
        })
        .addCase(editMovie.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.fetchStatus = 'succeeded';
        })
        .addCase(deleteMovie.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.fetchStatus = 'succeeded';
        })
    }
})

export default moviesSlice;