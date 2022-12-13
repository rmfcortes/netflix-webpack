import { useSearchParams } from 'react-router-dom';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import MovieSelectedPanel from 'Components/MovieSelectedPanel/MovieSelectedPanel';
import './HomeHeader.scss';

function HomeHeader(): JSX.Element {
    const [searchParams] = useSearchParams();
    const movie = searchParams.get('movie');
    const content = movie !== null ? <MovieSelectedPanel/> : <SearchPanel/>
    return(
        <>
            { content }
        </>
    );
}

export default HomeHeader;