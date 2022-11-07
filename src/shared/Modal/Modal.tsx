import './Modal.scss';

interface ModalProps {
    handleClose: React.MouseEventHandler,
    children: JSX.Element,
}

function Modal({ handleClose, children }: ModalProps): JSX.Element {
    return (
        <main className='modal'>
            <section className="modal-content">
                <button className='modal__close-button' onClick={ handleClose }>
                    X
                </button>
                { children }
            </section>
        </main>
    );
}

export default Modal;
