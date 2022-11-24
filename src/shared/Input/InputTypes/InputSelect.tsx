import { useState } from 'react';
import { useFormikContext } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

import OutsideAlerter from 'src/hooks/OutsideAlerter';

import { Movie } from 'src/models/Movie';

import './InputSelect.scss'
import '../Input.scss';
import InputSelectOptions from './InputSelectOptions';

function SelectWithCheckboxes({ placeholder }: { placeholder: string }): JSX.Element {

    const formikContext = useFormikContext<Movie>();
    const [selectedGenres, setSelectedGenres] = useState(formikContext.values.genres);
    if (selectedGenres !== formikContext.values.genres) {
        setSelectedGenres(formikContext.values.genres);
    }

    const handleSetSelectedGenres = (genre: string): void => {
        const genreIndex = selectedGenres.findIndex(selectedGenre => selectedGenre === genre);
        let genresUpdated: string[] = [];
        if (genreIndex >= 0) {
            genresUpdated = selectedGenres.filter(selectedGenre => selectedGenre !== genre);
        } else {
            genresUpdated = [...selectedGenres, genre];
        }

        formikContext.setFieldValue('genres', genresUpdated);
        setSelectedGenres(genresUpdated);
    };
    
    const [expanded, setExpanded] = useState(false);

    function toogleCheckboxes(): void {
        const checkboxes = document.getElementById('checkboxes') as HTMLInputElement;
        if (!expanded) {
          checkboxes.style.display = 'block';
          setExpanded(true);
        } else {
          hideCheckBoxes();
        }
    }

    function hideCheckBoxes(): void {
        const checkboxes = document.getElementById('checkboxes') as HTMLInputElement;
        checkboxes.style.display = 'none';
        setExpanded(false);
    }

    return(
        <OutsideAlerter handler={ expanded ? hideCheckBoxes : () => {} }>
            <div className="input-field select-container">
                <div className="selectBox" onClick={ toogleCheckboxes }>
                    <select className="input-field">
                        <option>
                            { selectedGenres.length > 0 
                                ? selectedGenres.join(', ')
                                : placeholder }
                        </option>
                    </select>
                    <div className="overSelect"></div>
                    <FontAwesomeIcon className='input__icon' icon={ faCaretSquareDown } />
                </div>
                <InputSelectOptions selectedGenres={ selectedGenres} handleSetSelectedGenres={ handleSetSelectedGenres }/>
            </div>
        </OutsideAlerter>
    );
}

export default SelectWithCheckboxes;