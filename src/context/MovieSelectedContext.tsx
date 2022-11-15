import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { Movie } from 'src/models/Movie';


type IMovieContext = [Movie | null, React.Dispatch<React.SetStateAction<Movie | null>>];
const MovieSelectedContext = createContext<IMovieContext>([null, () => null ]);

const MovieSelectedContextProvider = ({ children }: {children: JSX.Element[]}): JSX.Element => {
    const [movie, setMovieSelected] = useState<Movie | null>(null)
    return (
        <MovieSelectedContext.Provider value={[ movie, setMovieSelected ]}>
            { children }
        </MovieSelectedContext.Provider>
    );
}

const useMovieSelectedContext = (): IMovieContext => useContext(MovieSelectedContext);

export { MovieSelectedContext, MovieSelectedContextProvider, useMovieSelectedContext };