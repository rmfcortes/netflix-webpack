import { useSelector } from 'react-redux';

import MovieCard from 'Components/MovieCard/MovieCard';

import { IStore } from 'src/models/Store';
import { Movie } from 'src/models/Movie';
import  './MovieList.scss';

function MovieList(): JSX.Element {
    const state = useSelector((state: IStore) => state.movies);

    return (
        <ul className='movies-container'>
            {
                state.data.map((movie: Movie) => <MovieCard movie={ movie } key={ movie.id }/>)
            }
        </ul>
    );
}

export default MovieList;