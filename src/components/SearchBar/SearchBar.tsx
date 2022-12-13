import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import './SearchBar.scss'

function SearchBar(): JSX.Element {
    const inputEl = useRef<HTMLInputElement>(null);
    const { searchQuery } = useParams();
    const navigate = useNavigate();
    
    const searchHandler = (): void => {
        const value =  inputEl.current?.value?.toString() ?? '';
        navigate('/search/' + value);
    }
    return (
        <>
            <input
                className='search-bar__input'
                placeholder='What do you want to watch?'
                defaultValue={ searchQuery }
                ref={ inputEl }
            />
            <Button text="Search" width="233px" className="btn-primary" handleClick={ searchHandler } />
        </>
    );
}

export default SearchBar;