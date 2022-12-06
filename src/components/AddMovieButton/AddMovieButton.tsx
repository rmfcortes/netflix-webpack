import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moviesSlice, { getMovies } from 'src/store/moviesSlice';

import AddMovie from 'Components/AddMovie/AddMovie';
import Congratulations from 'Components/CongratulationsMessage/Congratulations';

import Button from 'Shared/Button/Button';
import Modal from 'Shared/Modal/Modal';
import { IStore } from 'src/models/Store';

function AddMovieButton(): JSX.Element {
    const dispatch = useDispatch<any>();
    const  [show, setShow] = useState(false);
    const showModal = (): void => {
        setShow(true);
    }
    const hideModal = (): void => {
        setShow(false);
        dispatch(moviesSlice.actions.clearAddedMovieState())
    }

    const newAddedState = useSelector((state: IStore) => state.movies.new_added);
    
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);

    const addMovieModal = show && <Modal handleClose={ hideModal }><AddMovie/></Modal>
    const congratulationsModal = show && <Modal handleClose={ hideModal }><Congratulations/></Modal>
    const modal = newAddedState === true ? congratulationsModal : addMovieModal;
    return (
        <>
            <Button className='btn-secondary' handleClick={ showModal } text='+ Add Movie' width='177px'/>
            {
                modal
            }
        </>
    );
}

export default AddMovieButton;