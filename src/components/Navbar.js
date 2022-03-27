import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import DataContext from './DataContext';

function Navbar() {

    const { pokemon, setFilteredData, wordEntered, setWordEntered } = useContext(DataContext)

    const handleFilter = (event) => {
        let val = event.target.value
        setWordEntered(val)

        const newFilter = pokemon.filter((value) => {
            return value.name.toLowerCase().includes(val.toLowerCase())
        })

        val === "" ? setFilteredData([]) : setFilteredData(newFilter);

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