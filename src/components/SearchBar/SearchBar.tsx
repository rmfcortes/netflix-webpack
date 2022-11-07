import Button from '../../shared/Button/Button';
import './SearchBar.scss'

function SearchBar(): JSX.Element {
    return (
        <>
            <input className='search-bar__input' placeholder='What do you want to watch?'/>
            <Button text="Search" width="233px" className="btn-primary"></Button>
        </>
    );
}

export default SearchBar;