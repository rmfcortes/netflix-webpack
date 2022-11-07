import AddMovie from 'Components/AddMovie/AddMovie';
import { useState } from 'react';

import Button from 'Shared/Button/Button';
import Modal from 'Shared/Modal/Modal';

function AddMovieButton(): JSX.Element {
    const  [show, setShow] = useState(false);
    const showModal = (): void => {
        setShow(true);
    }
    const hideModal = (): void => {
        setShow(false);
    }

    const addMovieModal = show && <Modal handleClose={ hideModal }><AddMovie/></Modal>
    return (
        <>
            <Button className='btn-secondary' handleClick={ showModal } text='+ Add Movie' width='177px'/>
            {
                addMovieModal
            }
        </>
    );
}

export default AddMovieButton;