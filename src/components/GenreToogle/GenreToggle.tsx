import { useState } from 'react';
import './GenreToggle.scss'

function GenreToggle(): JSX.Element {
    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const [selected, setSelected] = useState(0);

    return (
        <ul className='genre-container'>
            { 
                genres.map((genre, i) => (
                    <li className='genre-title' key={ genre}>
                        <span 
                            className={ selected === i ? 'selected' : '' }
                            onClick={ () => setSelected(i) }
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