export interface MovieProps {
    movie: Movie;
}

export interface Movie {
    image: string;
    title: string;
    genre: string;
    year: number;
    rate: number;
    duration: string;
    description: string;
}