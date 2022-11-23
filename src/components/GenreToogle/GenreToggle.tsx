import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import moviesSlice, { getMovies } from 'src/store/moviesSlice';

import './GenreToggle.scss'

function GenreToggle(): JSX.Element {

    const dispatch = useDispatch<any>();
    const { filterMovies } = moviesSlice.actions;

    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const [selected, setSelected] = useState('all');

    const memoizedHandlerFiltering = useCallback((genre: string) => {
        setSelected(genre)
        dispatch(filterMovies(genre));
        dispatch(getMovies())
    }, [dispatch, filterMovies])

    return (
        <ul className='genre-container'>
            { 
                genres.map((genre, i) => (
                    <li className='genre-title' key={ genre }>
                        <span 
                            className={ selected === genre ? 'selected' : '' }
                            onClick={ () => genre === selected ? null : memoizedHandlerFiltering(genre) }
                        >
                            { genre }
                        </span>
                    </li>
                )) 
            }
        </ul>
    );
}

export default GenreToggle;