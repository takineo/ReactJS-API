import axios from "axios";
import React,{useState, useEffect} from "react";

function CocktailCard(props) {

    const [cocktail, setCocktail] = useState()

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
        .then(res => setCocktail(res))
    }, [])
    return  ( 
        
        <div>
            {cocktail !== undefined && (
    <ul className="products grid grid-cols-4 z-10 mt-12">
        <li className="w-3/4 p-2">
            <img className='mx-auto' src={cocktail.data.drinks[0].strDrinkThumb} />
            <h2 className='font-bold'>{cocktail.data.drinks[0].strGlass}</h2>
            <h3 className='font-serif'>{cocktail.data.drinks[0].strCategory}</h3>
            <button className=' absolute bottom w-36' onClick={() => handleDelete(cocktails.idDrink)} >Supprimer</button>
        </li>
    </ul>
            )}
                
        </div>
        );
    }

export default CocktailCard;