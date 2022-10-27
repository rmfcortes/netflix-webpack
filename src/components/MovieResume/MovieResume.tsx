import { MovieProps } from 'src/models/Movie';
import './MovieResume.scss';

function MovieResume({ movie }: MovieProps): JSX.Element {
    return (
        <article className='movie-resume-container'>
            <p className='movie-resume-container__title'>
                { movie.title }
            </p>
            <p className='movie-resume-container__genre'>
                { movie.genre }
            </p>
            <div className='movie-resume-container__year'>
                { movie.year }
            </div>
        </article>
    );
}

export default MovieResume;