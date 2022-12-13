import { IMovieStore } from 'src/models/Store';

export const initialStateMock: IMovieStore = {
    data: [],
    fetchStatus: '',
    limit: 10,
    offset: 0,
    sortBy: 'Release date',
    sortOrder: 'desc',
}