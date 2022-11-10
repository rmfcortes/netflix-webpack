import InputField from 'Shared/Input/InputField';
import { Movie } from 'src/models/Movie';
import './MovieForm.scss';

function MovieForm({ movie }: { movie?: Movie }): JSX.Element {
    return (
        <>
            <ul className='movie-details__form-container'>
                <InputField label='Title' placeholder='Moana' width='60%' value={ movie?.title }/>
                <InputField label='Release Date' type='date' width='35%' value={ movie?.year }/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Movie URL' type='url' placeholder='https://' width='60%'/>
                <InputField label='Rating' type='number' placeholder='7.8' width='35%'/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Genre' type='select' placeholder='Select Genre' width='60%'/>
                <InputField label='Runtime' type='number' placeholder='minutes' width='35%'/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Overview' type='textarea' placeholder='Movie description' value={ movie?.genre }/>
            </ul>
        </>
    );
}

export default MovieForm