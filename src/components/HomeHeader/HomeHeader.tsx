import { useMovieSelectedContext } from 'src/context/MovieSelectedContext';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import './HomeHeader.scss';
import MovieSelectedPanel from 'Components/MovieSelectedPanel/MovieSelectedPanel';

function HomeHeader(): JSX.Element {
    const  [ movieSelected ] = useMovieSelectedContext(); 
    const content = movieSelected !== null ? <MovieSelectedPanel/> : <SearchPanel/>
    return(
        <>
            { content }
        </>
    );
}

export default HomeHeader;