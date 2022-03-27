import { createContext, useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [wordEntered, setWordEntered] = useState("")

    const [open, setOpen] = useState(false)

    return (
        <DataContext.Provider value={{
            pokemon, setPokemon,
            filteredData, setFilteredData,
            wordEntered, setWordEntered,
            loading, setLoading, loadMore, setLoadMore,
            open, setOpen
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext