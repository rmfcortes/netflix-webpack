import FloatingMenu from 'Shared/FloatingMenu/FloatingMenu';
import { useSortContext } from 'src/context/SortContext';
import OutsideAlerter from 'src/hooks/OutsideAlerter';
import { SortType } from 'src/models/SortTypes';

export interface Filter {
    text: SortType;
    handler: (text: SortType) => void;
}

interface SortingMenuProps {
    show: boolean;
    handleClose: () => void;
}

function SortingMenu({ show, handleClose }: SortingMenuProps): JSX.Element {

    const [, setSort] = useSortContext();

    const handleSetSorting = (text: SortType): void => {
        handleClose();
        setSort(text);
    }
    const actions: Filter[] = [
        {
            text: 'Name',
            handler: handleSetSorting,
        }, 
        {
            text: 'Release date',
            handler: handleSetSorting,
        }
    ];
    const actionsElements = actions.map(action => 
        <li className='actions-menu__item' onClick={ () => action.handler(action.text) } key={ action.text }>{ action.text }</li>
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