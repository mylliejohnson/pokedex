import React, { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';
import axios from 'axios';
import Stats from './Stats';
import MenuIcon from '@mui/icons-material/Menu';

// -------------------------------------------------- //

function View(props) {

    const { open, setOpen } = useContext(DataContext)
    const [singlePoke, setSinglePoke] = useState([])
    const [loading, setLoading] = useState(false)
    const [spriteId, setSpriteId] = useState(1)
    const [stats, setStats] = useState([])
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])

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

    console.log(stats)

    if (loading) return (<img src="https://i.imgur.com/aMz1Qtu.gif" className='loadPoke' height="100px" />)

    let spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${spriteId}.svg`

    // POKE STATS
    const sKeys = ["hp", "attack", "defense", "spAttack", "spDefense", "speed"]
    const sValues = stats.map(base => base.base_stat)
    const statValue = sKeys.reduce((obj, key, index) => ({ ...obj, [key]: sValues[index] }), {})

    return (
        <div className='View'>
            <h1>{singlePoke.name}</h1>
            <div className='container'>
                <button
                    className='pokeMenuBtn'
                    onClick={() => setOpen(true)}
                    style={{ display: open ? 'none' : 'block' }}>
                    <MenuIcon fontSize="large" />
                </button>

                <div className='attributes'>
                    <div className='types'>
                        <span>TYPES:</span>
                        {types.map((x) => (<li className='type'>{x.type.name}</li>))}
                    </div>
                    <div className='abilities'>
                        <span>ABILITIES:</span>
                        {abilities.map((x) => (<li className='ability'>{x.ability.name}</li>))}
                    </div>
                </div>
                <div className='top'>
                    <div className='pokeSprite'>
                        <img src={spriteSrc} className="poke-img" alt={`${singlePoke.name}`} />
                    </div>
                    <Stats
                        hp={statValue.hp}
                        attack={statValue.attack}
                        defense={statValue.defense}
                        spAttack={statValue.spAttack}
                        spDefense={statValue.spDefense}
                        speed={statValue.speed}
                    />
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
                </div>
            </div>
        </div>
    );
}

export default View;


