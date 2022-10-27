import './MoviesFoundResult.scss';

function MoviesFoundResult(): JSX.Element {
    const moviesFound = 39;
    return (
        <p className='movies-found-result'>
            { moviesFound }
            <span className='movies-found-result__text'>
                movies found
                </span>
        </p>
    )
}

export default MoviesFoundResult;