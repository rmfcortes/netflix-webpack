import { BaseSyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';

import MovieResume from 'Components/MovieResume/MovieResume';
import ActionsMenu from 'Components/ActionsMenu/ActionsMenu';

import FallbackImage from 'src/assets/img/No_image_poster.png';

import { Movie, MovieProps } from 'src/models/Movie';
import './MovieCard.scss';

function MovieCard({ movie }: MovieProps): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);

    const closeMovieActions = (): void => {
        setShowMenu(false);
    }
    const showMovieActions = (): void => {
        setShowMenu(true);
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const [, setMovieSelected] = useMovieSelectedContext();
    
    const handleMovieSelected = (movie: Movie): void => {
        searchParams.set('movie', movie.id.toString());
        setSearchParams(searchParams);
        setMovieSelected(movie);
    }

    const actionsMenu = showMenu ? <ActionsMenu handleClose={ closeMovieActions } movie={ movie }/> : <></>

    const addDefaultSrc = (ev: BaseSyntheticEvent): void => {
        ev.target.src = FallbackImage
    }
    
    return (
        <>
            <li className='movie-card'>
                <img
                    src={ movie.poster_path }
                    className="movie-details__poster"
                    alt="movie_poster"
                    onClick={ handleMovieSelected.bind(null, movie) }
                    onError={ addDefaultSrc }
                />
                <button className='movie-card__context-menu' onClick={ showMovieActions }></button>
                <MovieResume movie={ movie }/>
                { actionsMenu }
            </li>
        </>
    );
}

export default MovieCard;