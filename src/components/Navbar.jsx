import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            
            <Link to="/"><img src="./images/pokemonLogo.png" alt="logo" /></Link>
            <h2>POKEMON</h2>
            {/* <Link className="menu-item" to="/pokemon">Pokemon</Link> */}
            
        </nav >
    )
}