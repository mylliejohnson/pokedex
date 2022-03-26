import React, { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';
import axios from 'axios';
import { ColorLens } from '@mui/icons-material';
import { color } from '@mui/system';

// -------------------------------------------------- //

function View(props) {

    const { colors } = useContext(DataContext)

    const [singlePoke, setSinglePoke] = useState([])
    const [loading, setLoading] = useState(false)
    const [spriteId, setSpriteId] = useState(1)
    const [stats, setStats] = useState([])
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])

    let spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${spriteId}.svg`

    useEffect(() => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then(res => {
                setLoading(false)
                setSinglePoke(res.data)
                setSpriteId(res.data.id)
                setStats(res.data.stats)
                setTypes(res.data.types)
                setAbilities(res.data.abilities)
            })
    }, [props])

    if (loading) return (<img src="https://i.imgur.com/aMz1Qtu.gif" className='loadPoke' height="100px" />)

    // POKE STATS
    const sKeys = ["hp", "attack", "defense", "specAttack", "specDefense", "speed"]
    const sValues = stats.map(base => base.base_stat)
    const statValue = sKeys.reduce((obj, key, index) => ({ ...obj, [key]: sValues[index] }), {})

    // poke type colors
    const main_types = Object.keys(colors)



    return (
        <div className="View">
            <h1>{singlePoke.name}</h1>
            <div className='container'>
                <div className='top'>
                    <div className='pokeSprite'>
                        <img src={spriteSrc} className="poke-img" alt={`${singlePoke.name}`} />
                    </div>
                    <div className='stats' style={{ minWidth: '400px' }}>

                        <h4 className='stat-label'>HP:</h4>
                        <div className="stat" style={{ width: `${statValue.hp}%`, background: 'teal' }}>
                            {statValue.hp}
                        </div>

                        <h4 className='stat-label'>Attack</h4>
                        <div>

                            <div style={{ width: `${statValue.attack}%`, background: 'orange' }}>
                                {statValue.attack}
                            </div>
                        </div>

                        <h4 className='stat-label'>Defense</h4>
                        <div>

                            <div style={{ width: `${statValue.defense}%`, background: 'green' }}>
                                {statValue.defense}
                            </div>
                        </div>

                        <h4 className='stat-label'>SP Attack</h4>
                        <div>
                            <div style={{ width: `${statValue.specAttack}%`, background: 'blue' }}>
                                {statValue.specAttack}
                            </div>
                        </div>

                        <h4 className='stat-label'>SP Defense</h4>
                        <div>
                            <div style={{ width: `${statValue.specDefense}%`, background: 'purple' }}>
                                {statValue.specDefense}
                            </div>
                        </div>

                        <h4 className='stat-label'>Speed</h4>
                        <div>
                            <div style={{ width: `${statValue.speed}%`, background: '#E9967A' }}>
                                {statValue.speed}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <span>Height</span>
                        <h3 className="info">{singlePoke.height}</h3>
                    </div>
                    <div>
                        <span>Weight</span>
                        <h3 className="info">{singlePoke.weight}</h3>
                    </div>
                    <div>
                        <span>Abilities</span>
                        {abilities.map((x) => (<li>{x.ability.name}</li>))}
                    </div>
                    <div>
                        <span>Types</span>
                        {types.map((x) => (<li>{x.type.name}</li>))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default View;


