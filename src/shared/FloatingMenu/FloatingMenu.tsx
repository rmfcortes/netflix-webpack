import './FloatingMenu.scss';

interface FloatingMenuProps {
    children: JSX.Element[];
    handleClose: React.MouseEventHandler;
}

function FloatingMenu({ children, handleClose }: FloatingMenuProps): JSX.Element {
    return (
        <section className='actions-menu__container'>
            <ul>
                { children }
            </ul>
            <button className='actions-menu__close-button' onClick={ handleClose }>
                X
            </button>
        </section>
    );
}

export default FloatingMenu;