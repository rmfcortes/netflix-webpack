import { useState } from 'react';
import SortingMenu from 'Components/SortingMenu/SortingMenu';
import { useSortContext } from 'src/context/SortContext';
import './MovieSorting.scss';

function MovieSorting(): JSX.Element {
    const [sort] = useSortContext();
    const [showSortingMenu, setSortingMenu] = useState(false);
    
    const openSortingMenu = (): void => setSortingMenu(true);
    const closeSortingMenu = (): void => setSortingMenu(false);

    return(
        <section style={ { position: 'relative' } }>
            <ul className='filters-list'>
                <li className='filters-list__item'>Sort by</li>
                <li className='filters-list__item selected' onClick={ openSortingMenu }>{ sort }</li>
            </ul>
            <SortingMenu show={ showSortingMenu } handleClose={ closeSortingMenu }/>
        </section>
    );
}

export default MovieSorting;