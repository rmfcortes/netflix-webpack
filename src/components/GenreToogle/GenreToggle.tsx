import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import moviesSlice, { getMovies } from 'src/store/moviesSlice';

import './GenreToggle.scss'

function GenreToggle(): JSX.Element {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch<any>();
    const { filterMovies } = moviesSlice.actions;

    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const initialGenre = searchParams.get('genre');
    const [selected, setSelected] = useState(initialGenre ?? 'all');

    const memoizedHandlerFiltering = useCallback((genre: string) => {
        setSelected(genre);
        searchParams.set('genre', genre);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    useEffect(() => {
        const genre = searchParams.get('genre');
        dispatch(filterMovies(genre ?? 'all'));
        dispatch(getMovies())
    }, [dispatch, filterMovies, searchParams]);

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