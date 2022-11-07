import Button from 'Shared/Button/Button';
import './DeleteMovie.scss';

function DeleteMovie(): JSX.Element {
    return (
        <>
            <h1 className='modal-movie-title'>DELETE MOVIE</h1>
            <p className='delete-movie__confirm-text'>Are you sure you want to delete this movie?</p>
            <Button text='Confirm' width='180px' className='btn-primary' floatRight={ true }/>
        </>
    );
}

export default DeleteMovie;