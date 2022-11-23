import { BaseSyntheticEvent } from 'react';

import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';
import FallbackImage from 'src/assets/img/No_image_poster.png';

import './MovieDetails.scss';

function MovieDetails(): JSX.Element {
    const [movie] = useMovieSelectedContext();
    const rateEl = movie?.vote_average !== undefined && movie.vote_average > 0 
                    ? <span className='movie-details__content__rate'>{movie?.vote_average}</span> 
                    : <></>
    const runtimeEl = movie?.runtime !== undefined && movie.runtime > 0 
                    ? <span style={{ marginLeft: '51px' }}>{ movie?.runtime }min</span>
                    : <></>

    const addDefaultSrc = (ev: BaseSyntheticEvent): void => {
        ev.target.src = FallbackImage
    }


    return (
        <section className='movie-details__container'>
            <img src={ movie?.poster_path } className="movie-details__poster" alt="movie_poster" onError={ addDefaultSrc }/>
            <article className='movie-details__content'>
                <h2 className='movie-details__content__title'>
                    { movie?.title }
                    { rateEl }
                </h2>
                <small className='movie-details__content__genre'>{ movie?.genres.join(', ') }</small>
                <strong className='movie-details__content__release'>
                    <span>{ movie?.release_date.split('-')[0] }</span>
                    { runtimeEl }
                </strong>
                <p className='movie-details__content__description'>{ movie?.overview }</p>
            </article>
        </section>
    );
}

export default MovieDetails;