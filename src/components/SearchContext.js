import { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";

const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
  
    const [wordEntered, setWordEntered] = useState("")

    return (
        <SearchContext.Provider value={{
            pokemon, setPokemon, filteredData, setFilteredData,
            wordEntered, setWordEntered,
            loading, setLoading, loadMore, setLoadMore
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext