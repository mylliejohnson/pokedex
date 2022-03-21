import React, { useState, useEffect } from 'react';
import axios from 'axios';

function View(props) {

    const [single, setSingle] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then((res) => {
                setLoading(false)
                setSingle(res.data)
            })
    }, [props])

    if (loading) return "Loading..."

    let imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

    return (
        <div className="View">
            <h1>{single.name}</h1>
            <p>{single.height}</p>
            <h3>Stats</h3>
            <img src={imgSrc + single.id + '.svg'} className="poke-img" alt={`${single.name}`} />
        </div>
    );
}

export default View;