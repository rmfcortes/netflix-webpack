import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';
import { getPoster } from 'src/utils/movie-poster';

import './MovieDetails.scss';

function MovieDetails(): JSX.Element {
    const [movie] = useMovieSelectedContext();
    const img = getPoster(movie?.image ?? 'PulpFiction');
    return (
        <section className='movie-details__container'>
            <img src={ img } alt="movie_poster"/>
            <article className='movie-details__content'>
                <h2 className='movie-details__content__title'>
                    { movie?.title }
                    <span className='movie-details__content__rate'>{movie?.rate}</span>
                </h2>
                <small className='movie-details__content__genre'>{ movie?.genre }</small>
                <strong className='movie-details__content__release'>
                    <span>{ movie?.year }</span>
                    <span style={{ marginLeft: '51px' }}>{ movie?.duration }</span>
                </strong>
                <p className='movie-details__content__description'>{ movie?.description }</p>
            </article>
        </section>
    );
}

export default MovieDetails;