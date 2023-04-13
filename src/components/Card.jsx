import React from 'react'

export default function Card({pokemonDetails, isLoading }) {
    console.log(pokemonDetails)
    return (
        <>
            {
                isLoading ? <h1>Loding...</h1> :
                    pokemonDetails.map((item) => {
                        return (
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.name}</h2>
                                <img src={item.sprites.front_default} alt="" /><br></br>
                                <h2>{item.types.map(i=>{return i.type.name + " "})}</h2>
                            </div>

                        )
                    })
            }
        </>
    )
}