import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import DataContext from './DataContext'

// // NEED PROPS FROM NAVBAR.JS -- filteredData

function Pokemon() {

    // search context, states, and ref 
    const { pokemon, setPokemon, filteredData,
        loading, setLoading, loadMore } = useContext(DataContext)

    const [prevY, setPrevY] = useState(0)
    const [offset, setOffset] = useState(0)
    let pokemonRef = useRef([])
    let loadingRef = useRef(null)
    let offsetRef = useRef({})
    let prevYRef = useRef({})
    pokemonRef.current = pokemon
    offsetRef.current = offset
    prevYRef.current = prevY

    // calls api function, sets loading and finds window dimensions
    useEffect(() => {
        getPokemon()
        setOffset(offsetRef.current + 20)

        if (loading) return (<p className='loading'>Loading....</p>)

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }

        const observer = new IntersectionObserver(handleObserver, options)
        observer.observe(loadingRef.current)
    }, [])

    // api call gets all pokemon
    const getPokemon = async () => {
        setLoading(true)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offsetRef.current}`)

        if (res) {
            setLoading(false)
            setPokemon([...pokemonRef.current, ...res.data.results])
        }
    }

    // window dimansions for loading more poke in list
    const handleObserver = (entities, observer) => {
        const y = entities[0].boundingClientRect.y

        if (prevYRef.current > y) {
            getPokemon()
            setOffset(offsetRef.current + 20)
            setLoading(true)
        }
        setPrevY(y)
    }

    /* --------------- MAIN RETURN --------------- */

    return (
        <div className='Pokemon'>
            <div className='pokemon-list'>
                {filteredData.length == 0 && (
                    pokemon.map((poke, i) => {
                        return (
                            <div className='poke' key={i}>
                                <Link to={"/poke/" + poke.name}>
                                    <h3>{poke.name}</h3>
                                </Link>
                            </div>
                        )
                    })
                )}

                {filteredData.length != 0 && (
                    filteredData
                        .slice(0, 15)
                        .map((poke, i) => {
                            return (
                                <div className='poke' key={i}>
                                    <Link to={"/poke/" + poke.name}>
                                        <p>{poke.name}</p>
                                    </Link>
                                </div>
                            )
                        }))
                }

                <div className="loadMorePoke"
                    ref={loadingRef}
                    style={{ height: '50px' }}>
                    <span style={{ display: loadMore ? 'block' : 'none', textAlign: "center" }}>
                        Loading More...
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;

// (pokemon.map((poke, i) => {
//     return (
//         <div className='poke' key={i}>
//             <Link to={"/poke/" + poke.name}>
//                 <h3>{poke.name}</h3>
//             </Link>
//         </div>
//     )
// }))