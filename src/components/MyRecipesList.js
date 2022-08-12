import {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import RecipeListItem from "./RecipeListItem";
import {RecipeContext} from "../contexts/RecipeContext";
import {AuthContext} from "../contexts/AuthContext";
import * as recipeService from "../services/recipeService";


const MyRecipesList = () => {
    const [myRecipes, setMyRecipes] = useState( []);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getMyAll(user._id)
            .then(result => {
                setMyRecipes(result);
            });
    }, []);

    return (
        <main className="main" role="main">
          <div className="wrap clearfix">
            <div className="row">
              <header className="s-title">
                <h1>My Recipes</h1>
              </header>

              <section className="content three-fourth">
                  <div className="entries row">
                    {myRecipes.length > 0
                        ? myRecipes.map(x =>
                            <Link to={`/recipes/${x._id}`} className="details-button">
                                <RecipeListItem key={x._id} recipe={x} />
                            </Link>
                        )
                        : <h3 className="no-articles">You have no recipes yet</h3>
                    }
                  </div>
              </section>



          </div>

          </div>
        </main>
    );
};

export default MyRecipesList;