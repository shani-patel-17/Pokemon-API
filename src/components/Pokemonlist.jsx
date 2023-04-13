import React from 'react'
import Card from './Card'

export default function Pokemonlist({pokemon, loading}) {
    return (
        <div className="container">
            <div className="Random-poke">
            <Card pokemonDetails={pokemon} isLoading={loading}/>
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>

        </div>
    )
}