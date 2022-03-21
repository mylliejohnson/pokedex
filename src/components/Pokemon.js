import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

function Pokemon({ events }) {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [prevY, setPrevY] = useState(0)
    const [offset, setOffset] = useState(0)

    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    let pokemonRef = useRef([])
    let loadingRef = useRef(null)
    let offsetRef = useRef({})
    let prevYRef = useRef({})
    pokemonRef.current = pokemon
    offsetRef.current = offset
    prevYRef.current = prevY

    // get pokemon
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

    const handleObserver = (entities, observer) => {

        const y = entities[0].boundingClientRect.y

        if (prevYRef.current > y) {
            getPokemon()
            setOffset(offsetRef.current + 20)
            setLoading(true)
        }

        setPrevY(y)
    }

    const handleFilter = (event) => {
        let val = event.target.value
        setWordEntered(val)

        const newFilter = pokemon.filter((value) => {
            return value.name.toLowerCase().includes(val.toLowerCase())
        })

        if (val === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    // console.log(filteredData)

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };


    const getPokemon = async () => {
        setLoading(true)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offsetRef.current}`)

        if (res) {
            setLoading(false)
            setPokemon([...pokemonRef.current, ...res.data.results])
        }
    }

    // const displayData = () => {

    //     if (filteredData.length == 0) {
    //         return pokemon.map((poke, i) => {
    //             return (
    //                 <div className='poke' key={i}>
    //                     <Link to={"/poke/" + poke.name}>
    //                         <h3>{poke.name}</h3>
    //                     </Link>
    //                 </div>
    //             )
    //         })
    //     }
    //     else {
    //         filteredData.slice(0, 15).map((v, i) => {
    //             console.log(v.name)
    //         })
    //     }
    // }

    return (
        <div className='Pokemon'>
            <input
                type="text"
                id="search-box"
                placeholder="catch 'em all"
                onChange={handleFilter} />
            <div className='pokemon-list'>
                {/* {displayData()} */}

                {pokemon.map((poke, i) => {
                    return (
                        <div className='poke' key={i}>
                            <Link to={"/poke/" + poke.name}>
                                <h3>{poke.name}</h3>
                                <p>{i + 1}</p>
                            </Link>
                        </div>
                    )
                })}

                <div
                    className="yoHello"
                    ref={loadingRef}
                    style={{ height: '50px' }}
                >
                    <span style={{ display: loadMore ? 'block' : 'none', textAlign: "center" }}>Loading More..</span>
                </div>
            </div>
        </div >
    );
}

export default Pokemon;

// pokemon.map((poke, i) => {
//     return (
//         <div className='poke' key={i}>
//             <Link to={"/poke/" + poke.name}>
//                 <h3>{poke.name}</h3>
//             </Link>
//         </div>
//     )
// })