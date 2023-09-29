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
        const newFav =  favorites.filter((fav) => fav.idDrink !== id)
        setFavorites(newFav)
        
    }
    return <div>
        {favorites !== null && 
        favorites.map( (favoris, i) => (
            <CocktailCard key={i} id={favoris}/>
        ))
        }
    </div>;
}
export default Favoris;