import React from 'react';
import pokeball from '../pokeball.svg'

function Home() {
    return (
        <div>
            <div className='home'>
                <h1>← SELECT A POKEMON <img src={pokeball} className="pokeball" /></h1>

                <div className='mobile-homescreen'>
                    <h2>START TYPING & SELECT A POKEMON!</h2>
                    <span id="home-arrow">➔</span>
                    <img src={pokeball} className="pokeball" />
                </div>
            </div>
        </div>
    );
}

export default Home;