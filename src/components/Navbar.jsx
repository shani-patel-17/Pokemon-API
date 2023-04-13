import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/"><img src="./images/pokemonLogo.png" alt="logo" /></Link>
            <a className="menu-item" href="/pokemonlist">Pokemon List</a>
        </nav >
    )
}