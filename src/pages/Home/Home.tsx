import GenreToggle from 'Components/GenreToogle/GenreToggle';
import HomeHeader from 'Components/HomeHeader/HomeHeader';
import MovieSorting from 'Components/MovieSorting/MovieSorting';
import MoviesFoundResult from 'Components/MoviesFoundResult/MoviesFoundResult';
import Footer from 'Shared/Footer/Footer';
import './Home.scss';
import MovieList from 'Components/MovieList/MovieList';
import { SortContextProvider } from 'src/context/SortContext';

function Home(): JSX.Element {
    return(
        <>
            <HomeHeader/>
            <div className='divider'></div>
            <SortContextProvider>
                <section className='movies_container'>
                    <nav className='movies_container__filters'>
                        <GenreToggle/>
                        <MovieSorting/>
                    </nav>
                    <MoviesFoundResult/>
                    <MovieList/>
                </section>
            </SortContextProvider>
            <Footer/>
        </>
    )
}

export default Home;