import MovieDetails from 'Components/MovieDetails/MovieDetails';
import ResetSubmitButtons from 'Components/ResetSubmitButtons/ResetSubmitButtons';

function AddMovie(): JSX.Element {
    return(
        <>
            <h1 className='modal-movie-title'>ADD MOVIE</h1>
            <MovieDetails/>
            <div style={ { height: '60px'} }></div>
            <ResetSubmitButtons/>
        </>
    );
}

export default AddMovie;