import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as recipeService from '../services/recipeService';


export const RecipeContext = createContext();

export const RecipeProvider = ({
     children,
 }) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState( []);
    const [filteredRecipes, setFilteredRecipes] = useState( []);
    const [filters, setFilters] = useState({
        text:"",
        criteria:'all'
    })

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
                setFilteredRecipes(result);
            });
    }, []);


    const recipeAdd = (recipeData) => {
        console.log("rec",recipes);
        console.log("data",recipeData);

        setRecipes(state => [
            ...state,
            {
                ...recipeData,
            },
        ]);

        navigate('/recipes');
    };

    const addComment = (recipeId, comment) => {

        setRecipes(state => {
            const recipe = state.find(x => x._id == recipeId);

            const comments = recipe.comments || [];
            comments.push(comment)

            return [
                ...state.filter(x => x._id !== recipeId),
                { ...recipe, comments },
            ];
        });
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

    const recipeEdit = (recipeId, recipeData) => {
        setRecipes(state => state.map(x => x._id === recipeId ? recipeData : x));
    };

    const filterRecipes = (text, criteria ='all') => {
        if (criteria==='all'){
            setFilteredRecipes(recipes);
        } else {
            console.log("recipes",recipes)
            setFilteredRecipes(recipes.filter(x => x[criteria].includes(text)))
        }

    };

    return (
        <RecipeContext.Provider value={{
            recipes,
            filteredRecipes,
            recipeAdd,
            recipeEdit,
            fetchRecipeDetails,
            selectRecipe,
            recipeRemove,
            addComment,
            filterRecipes
        }}>
            {children}
        </RecipeContext.Provider>
    );
}