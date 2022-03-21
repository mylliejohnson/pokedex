import { createContext, useState } from "react";

const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [prevY, setPrevY] = useState(0)
    const [wordEntered, setWordEntered] = useState("")



    return (
        <SearchContext.Provider value={{
            pokemon, setPokemon, filteredData, setFilteredData,
            wordEntered, setWordEntered,
            loading, setLoading, loadMore, setLoadMore, prevY, setPrevY,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext