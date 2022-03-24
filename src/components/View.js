import React, { useState, useEffect, } from 'react';
import axios from 'axios';

// -------------------------------------------------- //

function View(props) {

    const [singlePoke, setSinglePoke] = useState([])
    const [loading, setLoading] = useState(false)
    const [spriteId, setSpriteId] = useState(1)

    const [pType, setPType] = useState([])

    let spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${spriteId}.svg`

    useEffect(() => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then((res) => {
                setLoading(false)
                setSinglePoke(res.data)
                setSpriteId(res.data.id)
                setPType(res.data.types)
                pokemonTypes(res.data)
                // console.log(res.data.types[0].type.name)
            })
    }, [props])

    if (loading) return "Loading..."

    function pokemonTypes(poke) {
        //  console.log(typeof res.data.types[0].type.name)
        //  poke.types.map((item) => console.log(item.type.name))
        poke.types.map((x) => {
            return (
                <li>{x.type.name}</li>
            )
        })
    }

    return (
        <div className="View">
            <h1>{singlePoke.name}</h1>

            <div className='container'>

                {/* {pType.map((x) => x.type.name)} */}

                <div className='left'>
                    <img src={spriteSrc} className="poke-img" alt={`${singlePoke.name}`} />
                </div>

                <div className='right'>
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
                    </div>
                    <div>
                        <span>Types</span>
                        {pokemonTypes}
                        {/* {(
                            pType.map((poke, i) => {
                                return (
                                    <div className='poke' key={i}>

                                        <h3>{poke.name}</h3>

                                    </div>
                                )
                            })
                        )} */}


                    </div>
                </div>
            </div>

        </div>
    );
}

export default View;
