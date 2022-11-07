import MovieCard from 'Components/MovieCard/MovieCard';

import { movies } from 'src/constants/Movies';
import { Movie } from 'src/models/Movie';
import  './MovieList.scss';
import { SortType } from 'src/models/SortTypes';
import { useSortContext } from 'src/context/SortContext';


function MovieList(): JSX.Element {
    const [ sort ] = useSortContext();
    const sortMovies = (sort: SortType): Movie[] => {
        return movies.sort((a, b) => {
            switch (sort) {
                case 'Name':
                    return a.title.localeCompare(b.title);
                case 'Release date':
                    return a.year - b.year;
                default:
                    return a.year - b.year;
            }
        });
    };

    return (
        <ul className='movies-container'>
            {
                sortMovies(sort).map((movie: Movie) => <MovieCard movie={ movie } key={ movie.image }/>)
            }
        </ul>
    );
}

export default MovieList;