import MovieCard from 'Components/MovieCard/MovieCard';
import { movies } from 'src/constants/movies';
import { Movie } from 'src/models/Movie';
import  './MovieList.scss';

function MovieList(): JSX.Element {
    return (
        <ul className='movies-container'>
            {
                movies.map((movie: Movie) => <MovieCard movie={ movie } key={ movie.image }/>)
            }
        </ul>
    );
}

export default MovieList;