import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import { editMovie } from 'src/store/moviesSlice';

import MovieDetails from 'Components/MovieForm/MovieForm';
import ResetSubmitButtons from 'Components/ResetSubmitButtons/ResetSubmitButtons';
import { Movie } from 'src/models/Movie';

function EditMovie({movie}: { movie: Movie }): JSX.Element {
    const dispatch = useDispatch<any>();
    const classMovie = new Movie(movie);
    const submitHandler = (editedMovie: Movie): void => {
        if (editedMovie.genres.length === 0) {
            return alert('Selecciona por lo menos un género')
        }
        dispatch(editMovie(editedMovie))
    }
    return(
        <>
            <h1 className='modal-movie-title'>EDIT MOVIE</h1>
            <Formik initialValues={ classMovie } onSubmit={ submitHandler }>
                <Form>   
                    <MovieDetails/>
                    <div style={ { height: '60px'} }></div>
                    <ResetSubmitButtons/>
                </Form>
            </Formik>
        </>
    );
}

export default EditMovie;