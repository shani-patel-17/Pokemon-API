import React, { useEffect, useState } from 'react'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pokemonlist from "./components/Pokemonlist";
import "./components/style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from 'axios'

function App() {
  const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true)
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async(res) =>{
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            setPokeData(state => {
                state=[...state, result.data]
                return state;
            })
        })
    }
    useEffect(()=>{
        pokeFun();
    },[url])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home pokemon={pokeData} loading={loading}/>}/>
          <Route path="/pokemonlist" element = {<Pokemonlist />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
