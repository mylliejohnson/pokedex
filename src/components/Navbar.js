import React from 'react';
import { Link } from 'react-router-dom'

// UNINSTALL @MUI

function Navbar(props) {



    return (
        <div className='navbar'>

            <div>
                <form>

                {/* onChange={(event) => handleSearch(event)}  */}
                <input type="text" id="search-box" placeholder="catch 'em all" />
                    <input type="submit" id="search-btn" value="search" />
                </form>
            </div>

            <h1 className='pokemon-title'><Link to="/">Pokémon</Link></h1>
        </div>
    );
}

export default Navbar;