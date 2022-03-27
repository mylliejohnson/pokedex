import { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [wordEntered, setWordEntered] = useState("")

    const [open, setOpen] = useState(false)

    const colors = {
        fire: "#FF8811 ",
        grass: "#ABE188",
        fairy: "#E5D4CE",
        electric: "#fcde9c",
        water: "#2AB7CA",
        ground: "#C3A995",
        rock: "#424B54",
        poison: "#DD38B9",
        bug: "#065143",
        dragon: "#11270B",
        psychic: "#54DE6D",
        flying: "#F4D06F",
        fighting: "#BCF4DE ",
        normal: "#E3B505",
    }

    return (
        <DataContext.Provider value={{
            pokemon, setPokemon, filteredData, setFilteredData,
            wordEntered, setWordEntered,
            loading, setLoading, loadMore, setLoadMore, colors,
            open, setOpen
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext