import { Form, Formik } from 'formik';

import MovieDetails from 'Components/MovieForm/MovieForm';
import ResetSubmitButtons from 'Components/ResetSubmitButtons/ResetSubmitButtons';
import { Movie } from 'src/models/Movie';

function EditMovie({movie}: { movie: Movie }): JSX.Element {
    const classMovie = new Movie(movie);
    const submitHandler = (values: Movie): void => {
        console.log(`values`, values);
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