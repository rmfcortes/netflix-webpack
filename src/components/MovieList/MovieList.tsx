import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies } from 'src/store/moviesSlice';

import MovieCard from 'Components/MovieCard/MovieCard';

import { IStore } from 'src/models/Store';
import { Movie } from 'src/models/Movie';
import  './MovieList.scss';

function MovieList(): JSX.Element {
    const dispatch = useDispatch<any>();
    const state = useSelector((state: IStore) => state.movies);

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    return (
        <ul className='movies-container'>
            {
                state.data.map((movie: Movie) => <MovieCard movie={ movie } key={ movie.id }/>)
            }
        </ul>
    );
}

export default MovieList;