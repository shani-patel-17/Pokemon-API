import React from 'react'
import Card from './Card'
import Pokemoninfo from "./Pokemoninfo";

export default function Pokemonlist({ pokemon, loading,data,setPokeDex }) {
    return (
        <>
            <div className="container">
                <div className="Random-poke">
                    <Card pokemonDetails={pokemon} isLoading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <Pokemoninfo datainfo={data} />
            </div>
        </>
    )
}