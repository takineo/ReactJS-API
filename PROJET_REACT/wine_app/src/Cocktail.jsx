import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Cocktail() {
    
    const [search, setSearch] = useState('')
    const [cocktails, setCocktails] = useState([])
    const [showFavorites, setShowFavorites] = useState(false)
    const abortController = new AbortController( )
    
    // Récup les favoris depuis le local Storage si il y en a
    useEffect(() => {
        const favs = localStorage.getItem('favorites')
        if (favs) {
            setFavorites(JSON.parse(favs))
        }
    }, [])
    
    // Mettre en place les favoris à chaque changement du state "favorites"

    useEffect(() => {
        let apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

        // On effectue notre requete API vers la liste 
        axios.get(apiUrl)
        .then(res => setCocktails(res.data.drinks))
        .catch(err => console.log(err))
    }, [])
        

         // Mes fonctions d'ajout, de suppression, de changement d'input et d'affichage
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const AddFavorites = (id) => {
        const item = JSON.parse(localStorage.getItem('favoris'));

        if(item !== null){
            localStorage.setItem('favoris', JSON.stringify([...item, id]))
        } else  {
            localStorage.setItem('favoris', JSON.stringify([id]))
        }

    }

//products grid grid-cols-4 z-0 / mt-24 shop w-screen text-center
    return (

        <div className= "mt-24 shop w-screen text-center">
        <h1 className='font-serifConsolas'>Cocktails :</h1>
 {/* Barre de recherche */}
        <div className="search-bar mb-12">
                <input type='text' value={search} onChange={(e) => handleChange(e)}  />
                <button onClick={() => handleSearch()}>Search</button>
                
        </div>
{/* Recherche de cocktail */}
        {(!showFavorites && cocktails) &&
            <ul className="products grid grid-cols-4 z-10 ">
                {cocktails.map(drinks => (
                <div className="py-10 px-6 relative" key={drinks.idDrink}>
                    <img className='rounded-lg shadow-lg' src={drinks.strDrinkThumb} />
                    <h2 className='font-bold'>{drinks.strGlass}</h2>
                    <h3 className='font-serif'>{drinks.strCategory}</h3>
                    <button className='' onClick={() => AddFavorites(drinks.idDrink)} >Favorites</button>
                </div>
                ))}
            </ul>
        
        }
        </div>
    );
}

export default Cocktail;

