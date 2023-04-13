import React from 'react'

export default function Card({ pokemon, loading,infoPokemon}) {
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.name}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.types.map(i=>{return i.type.name + " "})}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}