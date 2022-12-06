export interface MovieProps {
    movie: Movie;
}

export class Movie {
    id:           number;
    title:        string;
    tagline:      string;
    vote_average: number;
    vote_count:   number;
    release_date: string;
    poster_path:  string;
    overview:     string;
    budget:       number;
    revenue:      number;
    genres:       string[];
    runtime:      number;
    constructor(movie?: Movie) {
        this.id=           movie?.id ?? 0;
        this.title=        movie?.title ?? '';
        this.tagline=      movie?.tagline ?? '';
        this.vote_average= movie?.vote_average ?? 0;
        this.vote_count=   movie?.vote_count ?? 0;
        this.release_date= movie?.release_date ?? '';
        this.poster_path=  movie?.poster_path ?? '';
        this.overview=     movie?.overview ?? '';
        this.budget=       movie?.budget ?? 0;
        this.revenue=      movie?.revenue ?? 0;
        this.genres=       movie?.genres ?? [];
        this.runtime=      movie?.runtime ?? 0;
    }
}