import { Movie, MovieProps } from 'src/models/Movie';
import './MovieCard.scss';
import MovieResume from 'Components/MovieResume/MovieResume';
import ActionsMenu from 'Components/ActionsMenu/ActionsMenu';
import { useState } from 'react';
import { getPoster } from 'src/utils/movie-poster';
import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';

function MovieCard({ movie }: MovieProps): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);
    const img = getPoster(movie.image);

    const closeMovieActions = (): void => {
        setShowMenu(false);
    }
    const showMovieActions = (): void => {
        setShowMenu(true);
    }

    const [, setMovieSelected] = useMovieSelectedContext();
    
    const handleMovieSelected = (movie: Movie): void => {
        setMovieSelected(movie);
    }

    const actionsMenu = showMenu ? <ActionsMenu handleClose={ closeMovieActions } movie={ movie }/> : <></>
    return (
        <>
            <li className='movie-card'>
                <img src={ img } alt="movie_poster" onClick={ handleMovieSelected.bind(null, movie) }/>
                <button className='movie-card__context-menu' onClick={ showMovieActions }></button>
                <MovieResume movie={ movie }/>
                { actionsMenu }
            </li>
        </>
    );
}

export default MovieCard;