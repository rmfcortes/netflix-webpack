import AddMovieButton from 'Components/AddMovieButton/AddMovieButton';
import SearchErrorBoundary from 'Components/SearchBar/SearchError';
import SearchBar from 'Components/SearchBar/SearchBar';
import Header from 'Shared/Header/Header';

function SearchPanel(): JSX.Element {
    return (
        <section className='home-header'>
            <Header>
                <AddMovieButton></AddMovieButton>
            </Header>
            <h1 className='home-header__title'>FIND YOUR MOVIE</h1>
            <SearchErrorBoundary>
                <SearchBar/>
            </SearchErrorBoundary>
        </section>
    );
}

export default SearchPanel;