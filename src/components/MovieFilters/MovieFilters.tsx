import { useState } from 'react';
import './MovieFilters.scss';

function MovieFilters(): JSX.Element {
    const filters = ['sort by', 'release date'];
    const [selected, setSelected] = useState(1);
    return(
        <ul className='filters-list'>
            { 
                filters.map((filter, i) => (
                    <li className={ 'filters-list__item ' +  (selected === i ? 'selected' : '') } key={ filter }  onClick={ () => setSelected(i) }>
                        { filter }
                    </li>
                )) 
            } 
        </ul>
    );
}

export default MovieFilters;