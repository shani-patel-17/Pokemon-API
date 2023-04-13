import React from 'react'
import Card from './Card'

export default function Home({pokemon, loading,}) {
    return (
        <> 
            <div className="container">
                <div className="Random-poke">
                    <Card />
                </div>
            </div>
        </>
    )
}
