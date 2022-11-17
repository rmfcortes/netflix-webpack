import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { SortType } from 'src/models/SortTypes';

type ISortContext = [SortType, React.Dispatch<React.SetStateAction<SortType>>];
const SortContext = createContext<ISortContext>([ 'Genre', () => null ]);

const SortContextProvider = ({ children }: {children: JSX.Element}): JSX.Element => {
    const [sort, setSort] = useState<SortType>('Genre')
    return (
        <SortContext.Provider value={[ sort, setSort ]}>
            { children }
        </SortContext.Provider>
    );
}

const useSortContext = (): ISortContext => useContext(SortContext);

export { SortContext, SortContextProvider, useSortContext };