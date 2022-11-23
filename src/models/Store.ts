import { Movie } from './Movie';
import { SortType } from './SortTypes';

export interface IStore {
    movies: IMovieStore,
}

export interface IMovieStore {
    data: Movie[];
    fetchStatus: 'idle' | 'pending' | 'succeeded' | 'failed' | '';
    limit: number;
    offset: number;
    sortBy: SortType;
    sortOrder: 'asc' | 'desc';
    filter?: '' | 'documentary' | 'comedy' | 'horror' | 'crime' | 'all';
    search?: string;
    searchBy?: 'title' | 'genres';
}

export const SortByIDs = {
    Genre: 'genre',
    'Release date': 'release_date',
    Rating: 'vote_average'
}