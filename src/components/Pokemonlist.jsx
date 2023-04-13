import React from 'react'
import Card from './Card'

export default function Pokemonlist() {
    return (
        <div className="container">
            <div className="Random-poke">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>

        </div>
    )
}