import { MovieProps } from 'src/models/Movie';
import PulpFiction from '../../assets/img/movies/pulp_fiction.jpg';
import Bohemian from '../../assets/img/movies/bohemian.jpg';
import KillBill from '../../assets/img/movies/kill_bill.jpg';
import Avengers from '../../assets/img/movies/avengers.jpg';
import Inception from '../../assets/img/movies/inception.jpg';
import RDogs from '../../assets/img/movies/reservoir_dogs.jpg';
import './MovieCard.scss';
import MovieResume from 'Components/MovieResume/MovieResume';
import ActionsMenu from 'Components/ActionsMenu/ActionsMenu';
import { useState } from 'react';

function MovieCard({ movie }: MovieProps): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);
    let img;
    switch (movie.image) {
        case 'PulpFiction':
            img = PulpFiction;
            break;
        case 'Bohemian':
            img = Bohemian;
            break;
        case 'KillBill':
            img = KillBill;
            break;
        case 'Avengers':
            img = Avengers;
            break;
        case 'Inception':
            img = Inception;
            break;
        case 'RDogs':
            img = RDogs;
            break;
    }

    const closeMovieActions = (): void => {
        setShowMenu(false);
    }
    const showMovieActions = (): void => {
        setShowMenu(true);
    }

    const actionsMenu = showMenu ? <ActionsMenu handleClose={ closeMovieActions } movie={ movie }/> : <></>
    return (
        <>
            <li className='movie-card'>
                <img src={ img } alt="movie_poster"/>
                <button className='movie-card__context-menu' onClick={ showMovieActions }></button>
                <MovieResume movie={ movie }/>
                { actionsMenu }
            </li>
        </>
    );
}

export default MovieCard;