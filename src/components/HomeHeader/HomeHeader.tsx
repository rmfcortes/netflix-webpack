import Button from 'Shared/Button/Button';
import Header from 'Shared/Header/Header';
import SearchBar from 'Components/SearchBar/SearchBar';
import SearchErrorBoundary from 'Components/SearchBar/SearchError';
import './HomeHeader.scss';


function HomeHeader(): JSX.Element {
    return(
        <section className='home-header'>
            <Header>
                <Button className='btn-secondary' text='+ Add Movie' width='177px'/>
            </Header>
            <h1 className='home-header__title'>FIND YOUR MOVIE</h1>
            <SearchErrorBoundary>
                <SearchBar/>
            </SearchErrorBoundary>
        </section>
    );
}

export default HomeHeader;