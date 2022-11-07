import { useState } from 'react';

import DeleteMovie from 'Components/DeleteMovie/DeleteMovie';
import EditMovie from 'Components/EditMovie/EditMovie';

import FloatingMenu from 'Shared/FloatingMenu/FloatingMenu';
import Modal from 'Shared/Modal/Modal';

import { Movie } from 'src/models/Movie';
import OutsideAlerter from 'src/hooks/OutsideAlerter';

interface ActionsMenuProps {
    movie: Movie;
    handleClose: () => void;
}

function ActionsMenu({ handleClose, movie }: ActionsMenuProps): JSX.Element {

    const  [showDelete, setShowDelete] = useState(false);
    const showDeleteModal = (): void => {
        setShowDelete(true);
    }
    const hideDeleteModal = (): void => {
        setShowDelete(false);
        handleClose();
    }

    const  [showEdit, setShowEdit] = useState(false);
    const showEditModal = (): void => {
        setShowEdit(true);
    }
    const hideEditModal = (): void => {
        setShowEdit(false);
        handleClose();
    }
    
    const actions = [
        {
            text: 'Edit',
            handler: showEditModal,
        }, 
        {
            text: 'Delete',
            handler: showDeleteModal,
        }
    ];
    const actionsElements = actions.map(action => 
        <li className='actions-menu__item' onClick={ action.handler } key={ action.text }>{ action.text }</li>
    );

    const modalDelete = showDelete && <Modal handleClose={ hideDeleteModal }><DeleteMovie/></Modal>
    const modalEdit = showEdit && <Modal handleClose={ hideEditModal }><EditMovie movie={movie}/></Modal>

    return (
        <OutsideAlerter handler={ handleClose }>
            <FloatingMenu handleClose={ handleClose }>{ actionsElements }</FloatingMenu>
            { modalDelete }
            { modalEdit }
        </OutsideAlerter>
    );
}

export default ActionsMenu;