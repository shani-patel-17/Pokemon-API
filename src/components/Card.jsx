import React from 'react'

export default function Card({ pokemonDetails, isLoading }) {
    return (
        <>
            {
                isLoading ? <h1>Loding...</h1> :
                    pokemonDetails.map((item, i) => {
                        return (
                            <div className="card" key={i}>
                                <h2>{item.name}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.id}</h2>
                            </div>

                        )
                    })
            }
        </>
    )
}