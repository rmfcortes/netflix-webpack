import Header from 'Shared/Header/Header';
import './MovieSelectedPanel.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MovieDetails from 'Components/MovieDetails/MovieDetails';

import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';

function MovieSelectedPanel(): JSX.Element {
    const [, setMovieSelected] = useMovieSelectedContext();

    const handleSearchClick = (): void => setMovieSelected(null);
    return (
        <section style={{ paddingTop: '20px' }}>
            <Header>
                <FontAwesomeIcon className='header-panel__icon' icon={ faMagnifyingGlass } onClick={ handleSearchClick }/>
            </Header>
            <MovieDetails/>
        </section>
    );
}

export default MovieSelectedPanel;