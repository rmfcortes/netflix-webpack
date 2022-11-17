import { useState } from 'react';
import { useSelector } from 'react-redux';

import SortingMenu from 'Components/SortingMenu/SortingMenu';
import { IStore } from 'src/models/Store';
import './MovieSorting.scss';

function MovieSorting(): JSX.Element {
    const moviesState = useSelector((state: IStore) => state.movies);
    const [showSortingMenu, setSortingMenu] = useState(false);
    
    const openSortingMenu = (): void => setSortingMenu(true);
    const closeSortingMenu = (): void => setSortingMenu(false);

    return(
        <section style={ { position: 'relative' } }>
            <ul className='filters-list'>
                <li className='filters-list__item'>Sort by</li>
                <li className='filters-list__item selected' onClick={ openSortingMenu }>{ moviesState.sortBy }</li>
            </ul>
            <SortingMenu show={ showSortingMenu } handleClose={ closeSortingMenu }/>
        </section>
    );
}

export default MovieSorting;