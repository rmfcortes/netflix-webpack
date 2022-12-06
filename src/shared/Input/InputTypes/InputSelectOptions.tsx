import './InputSelect.scss'
import '../Input.scss';

interface InputSelectOptionsInterface {
    selectedGenres: string[];
    handleSetSelectedGenres: (genre: string) => void
}

function InputSelectOptions({ selectedGenres,  handleSetSelectedGenres}: InputSelectOptionsInterface): JSX.Element {

    const shouldBeInitiallyChecked = (genre: string): boolean | undefined => selectedGenres.includes(genre);

    const availableGenres = ['Documentary', 'Action', 'Comedy', 'Horror', 'Crime', 'Adventure', 'Science Fiction'];
    const options = availableGenres.map(genre => (
        <li key={ genre }>
            <label htmlFor={ genre }>
            <input 
                type="checkbox"
                id={ genre }
                defaultChecked={ shouldBeInitiallyChecked(genre) }
                onChange={ () => handleSetSelectedGenres(genre) }
            />
                { genre }
            </label>
        </li>
    ));

    return(
        <ul id="checkboxes">
            { options }
        </ul>
    );
}

export default InputSelectOptions;