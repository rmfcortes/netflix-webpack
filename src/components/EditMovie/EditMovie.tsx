import MovieDetails from 'Components/MovieDetails/MovieDetails';
import ResetSubmitButtons from 'Components/ResetSubmitButtons/ResetSubmitButtons';
import { Movie } from 'src/models/Movie';

function EditMovie({movie}: { movie: Movie }): JSX.Element {
    return(
        <>
            <h1 className='modal-movie-title'>EDIT MOVIE</h1>
            <MovieDetails movie={ movie }/>
            <div style={ { height: '60px'} }></div>
            <ResetSubmitButtons/>
        </>
    );
}

export default EditMovie;