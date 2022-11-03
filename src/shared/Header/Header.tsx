import Logo from '../Logo/Logo';
import './Header.scss';

function Header({ children }: {children?: JSX.Element}): JSX.Element {
    return (
        <header className='header'>
            <Logo/>
            { children }
        </header>
    );
}

export default Header