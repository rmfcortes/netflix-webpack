import { Outlet } from 'react-router-dom';

import GenreToggle from 'Components/GenreToogle/GenreToggle';

import MovieSorting from 'Components/MovieSorting/MovieSorting';
import MoviesFoundResult from 'Components/MoviesFoundResult/MoviesFoundResult';
import Footer from 'Shared/Footer/Footer';
import './Home.scss';
import MovieList from 'Components/MovieList/MovieList';

import { MovieSelectedContextProvider } from 'src/context/MovieSelectedContext';

function Home(): JSX.Element {
    return(
        <>
            <MovieSelectedContextProvider>
                <Outlet/>
                <div className='divider'></div>
                <section className='movies_container'>
                    <nav className='movies_container__filters'>
                        <GenreToggle/>
                        <MovieSorting/>
                    </nav>
                    <MoviesFoundResult/>
                    <MovieList/>
                </section>
            </MovieSelectedContextProvider>
            <Footer/>
        </>
    )
}

export default Home;