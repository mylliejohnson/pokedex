import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import SearchContext from './SearchContext';

// NEED PROPS FROM POKEMON.JS -- pokemon
// UNINSTALL @MUI

function Navbar() {

    const { pokemon, filteredData, setFilteredData, wordEntered, setWordEntered } = useContext(SearchContext)

    const handleFilter = (event) => {
        let val = event.target.value
        setWordEntered(val)

        const newFilter = pokemon.filter((value) => {
            return value.name.toLowerCase().includes(val.toLowerCase())
        })

        if (val === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div className='navbar'>
            <div>
                <form>
                    <input
                        type="text"
                        id="search-box"
                        value={wordEntered}
                        placeholder="catch 'em all"
                        onChange={handleFilter} />
                </form>
            </div>

            <h1 className='pokemon-title'><Link to="/">Pokémon</Link></h1>
        </div>
    );
}

export default Navbar;