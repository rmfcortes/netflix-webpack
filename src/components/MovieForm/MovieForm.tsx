import InputField from 'Shared/Input/InputField';
import './MovieForm.scss';

function MovieForm(): JSX.Element {
    return (
        <>
            <ul className='movie-details__form-container'>
                <InputField label='Title' placeholder='Moana' width='60%' name='title' required={ true }/>
                <InputField label='Release Date' type='date' width='35%' name='release_date'/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Movie URL' type='url' placeholder='https://' width='60%' name='poster_path' required={ true }/>
                <InputField label='Rating' type='number' placeholder='7.8' width='35%' name='vote_average'/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Genre' type='select' placeholder='Select Genre' width='60%' name='genres'/>
                <InputField label='Runtime' type='number' placeholder='minutes' width='35%' name='runtime'/>
            </ul>
            <ul className='movie-details__form-container'>
                <InputField label='Overview' type='textarea' placeholder='Movie description' name='overview' required={ true }/>
            </ul>
        </>
    );
}

export default MovieForm