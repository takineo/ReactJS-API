import axios from "axios";
import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";

function Favoris () {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {

        const allFavories = JSON.parse(localStorage.getItem('favoris'))
        setFavorites(allFavories)
    },[])

    const handleDelete = (id) => {
        setFav =  favorites.filter((fav) => fav.idDrink !== id)
            const item = JSON.parse(localStorage.getItem('favoris'));
            if(item !== null){
                localStorage.setItem('favoris', JSON.stringify([...item, id]))
            } else  {
                localStorage.setItem('favoris', JSON.stringify([id]))
    
        }
        setFavorites(newFav)
        
    }
    return<div className= "mt-24 shop w-screen text-center">
    <h1 className='font-Consolas'>Mes Favoris</h1> <div>
        <ul className="flex products grid grid-cols-4 z-10 mt-12">
        {favorites !== null && 
        favorites.map( (favoris, i) => (
            <CocktailCard key={i} id={favoris}/>
        ))
        }
    </ul>
    </div>
    </div>;
}
export default Favoris;