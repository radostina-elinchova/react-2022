import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as recipeService from '../services/recipeService';

export const RecipeContext = createContext();



export const RecipeProvider = ({
     children,
 }) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState( []);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
            });
    }, []);


    const recipeAdd = (recipeData) => {
        setRecipes(state => [
            ...state,
            {
                ...recipeData,
            },
        ]);

        navigate('/recipes');
    };

    const selectRecipe = (recipeId) => {
        return recipes.find(x => x._id === recipeId) || {};
    };

    const fetchRecipeDetails = (recipeId, recipeDetails) => {
        setRecipes(state => state.map(x => x._id === recipeId ? recipeDetails : x));
    }

    const recipeRemove = (recipeId) => {
       setRecipes( state => state.filter(x => x._id !== recipeId))
    }


    return (
        <RecipeContext.Provider value={{
            recipes,
            recipeAdd,
            fetchRecipeDetails,
            selectRecipe,
            recipeRemove

        }}>
            {children}
        </RecipeContext.Provider>
    );
}