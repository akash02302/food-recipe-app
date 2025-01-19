import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const API_ID = '5d27a433'; // Replace with your Edamam API ID
const API_KEY = '23b26c49da27ebf7762ab9be29c42fd5'; // Replace with your Edamam API Key

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const searches= ['pizza', 'burger', 'cookies', 'juice', 'biryani', 'salad', 'chicken', 'pudding', 'soup']


    useEffect(() => {
        async function getRecipes() {
            if (searchQuery.trim() !== '') {
                try {
                    const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}`);
                    setRecipes(response.data.hits);
                } catch (error) {
                    console.error('Error fetching recipes:', error);
                    setRecipes([]);
                }
            } else {
                setRecipes([]);
            }
        }
        getRecipes();
    }, [searchQuery]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    { searches.map((search, index)=> (<div key={index} style={{animationDelay: index * .1 + "s"}} className='search-item'>
                        {search}    
                    </div>))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search ..." onChange={handleSearch} />
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="recipe-cards">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        {/* Display recipe details */}
                        <h3>{recipe.recipe.label}</h3>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <ul>
                            {recipe.recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient.text}</li>
                            ))}
                        </ul>
                        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
