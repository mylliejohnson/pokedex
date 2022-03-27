import React from 'react';

function Stats({ hp, attack, defense, spAttack, spDefense, speed }) {

    return (
        <div className='stats'>

            <h3>HP</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${hp}%`, background: 'teal' }}>
                    {hp}
                </div>
            </div>

            <h3>ATTACK</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${attack}%`, background: '#915E82' }}>
                    {attack}
                </div>
            </div>

            <h3>DEFENSE</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${defense}%`, background: '#598C1F' }}>
                    {defense}
                </div>
            </div>

            <h3>SP ATTACK</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${spAttack}%`, background: '#EF8337' }}>
                    {spAttack}
                </div>
            </div>

            <h3>SP DEFENSE</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${spDefense}%`, background: '#B90059' }}>
                    {spDefense}
                </div>
            </div>

            <h3>SPEED</h3>
            <div className='stat-container'>
                <div className="stat" style={{ width: `${speed}%` }}>
                    {speed}
                </div>
            </div>
        </div>
    );
}

export default Stats;