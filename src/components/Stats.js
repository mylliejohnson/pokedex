import React from 'react';

function Stats({ hp, attack, defense, spAttack, spDefense, speed }) {

    return (
        <div className='stats'>
            <div className='stat-div'>
                <h3 className='statLabel'>HP</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${hp}%`, background: '#8BBAB7' }}>
                        {hp}
                    </div>
                </div>
            </div>

            <div className='stat-div'>
                <h3 className='statLabel'>ATTACK</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${attack}%`, background: '#915E82' }}>
                        {attack}
                    </div>
                </div>
            </div>

            <div className='stat-div'>
                <h3 className='statLabel'>DEFENSE</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${defense}%`, background: '#598C1F' }}>
                        {defense}
                    </div>
                </div>
            </div>

            <div className='stat-div'>
                <h3 className='statLabel'>SP ATTACK</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${spAttack}%`, background: '#EF8337' }}>
                        {spAttack}
                    </div>
                </div>
            </div>

            <div className='stat-div'>
                <h3 className='statLabel'>SP DEFENSE</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${spDefense}%`, background: '#B90059' }}>
                        {spDefense}
                    </div>
                </div>
            </div>

            <div className='stat-div'>
                <h3 className='statLabel'>SPEED</h3>
                <div className='stat-container'>
                    <div className="stat" style={{ width: `${speed}%`, background: '#085064' }}>
                        {speed}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;