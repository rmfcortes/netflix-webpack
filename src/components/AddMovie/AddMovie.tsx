import { useDispatch } from 'react-redux';
import { Formik, Form, FormikHelpers } from 'formik';

import { postMovie } from 'src/store/moviesSlice';

import MovieForm from 'Components/MovieForm/MovieForm';
import ResetSubmitButtons from 'Components/ResetSubmitButtons/ResetSubmitButtons';
import { Movie } from 'src/models/Movie';


function AddMovie(): JSX.Element {
    const dispatch = useDispatch<any>();
    const initialValues = new Movie();

    const submitHandler = (movie: Movie): void => {
        if (movie.genres.length === 0) {
            return alert('Selecciona por lo menos un género')
        }
        dispatch(postMovie(movie))
    }

    const resetHandler = (_movie: Movie, extras: FormikHelpers<Movie>): void => {
        extras.setValues(initialValues);
    }

    return(
        <>
            <h1 className='modal-movie-title'>ADD MOVIE</h1>
            <Formik initialValues={ initialValues } onSubmit={ submitHandler } onReset={ resetHandler }>
                <Form>
                    <MovieForm/>
                    <div style={ { height: '60px'} }></div>
                    <ResetSubmitButtons/>
                </Form>
            </Formik>
        </>
    );
}

export default AddMovie;