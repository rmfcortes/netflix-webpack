import { useDispatch, useSelector } from 'react-redux';

import OutsideAlerter from 'src/hooks/OutsideAlerter';

import moviesSlice, { getMovies } from 'src/store/moviesSlice';

import FloatingMenu from 'Shared/FloatingMenu/FloatingMenu';
import { SortType } from 'src/models/SortTypes';
import { IStore } from 'src/models/Store';

interface SortingMenuProps {
    show: boolean;
    handleClose: () => void;
}

function SortingMenu({ show, handleClose }: SortingMenuProps): JSX.Element {
    const dispatch = useDispatch<any>();
    const { sortMovies } = moviesSlice.actions;
    const state = useSelector((state: IStore) => state.movies);

    const handleSetSorting = (text: SortType): void => {
        handleClose();
        dispatch(sortMovies(text));
        dispatch(getMovies())
    }
    const actions: SortType[] = ['Release date', 'Genre', 'Rating'];
    const actionsElements = actions.map(action => 
        <li 
            className='actions-menu__item'
            onClick={ () => action === state.sortBy ? handleClose() : handleSetSorting(action) }
            key={ action }
        >
                { action }
        </li>
    );
    return (
        <>
            {
                show 
                
                ? <OutsideAlerter handler={ handleClose }>
                    <FloatingMenu handleClose={ handleClose }>
                        { actionsElements }
                    </FloatingMenu>
                </OutsideAlerter>
                : <></>
            }
        </>
        
        
    );
}

export default SortingMenu;