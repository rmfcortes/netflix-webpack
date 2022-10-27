import GenreToggle from 'Components/GenreToogle/GenreToggle';
import HomeHeader from 'Components/HomeHeader/HomeHeader';
import MovieFilters from 'Components/MovieFilters/MovieFilters';
import MovieList from 'Components/MovieList/MovieList';
import MoviesFoundResult from 'Components/MoviesFoundResult/MoviesFoundResult';
import Footer from 'Shared/Footer/Footer';
import './Home.scss';

function Home(): JSX.Element {
    return(
        <>
            <HomeHeader/>
            <div className='divider'></div>
            <section className='movies_container'>
                <nav className='movies_container__filters'>
                    <GenreToggle/>
                    <MovieFilters/>
                </nav>
                <MoviesFoundResult/>
                <MovieList/>
            </section>
            <Footer/>
        </>
    )
}

export default Home;