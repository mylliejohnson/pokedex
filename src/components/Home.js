import React from 'react';
import pokeball from '../pokeball.svg'

function Home() {
    return (
        <div>
            <div className='home'>
                <h1>← SELECT A POKEMON</h1>
                <img src={pokeball} className="pokeball"/>
            </div>
        </div>
    );
}

export default Home;