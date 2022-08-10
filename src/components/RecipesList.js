import { useContext } from "react";
import { Link } from 'react-router-dom';
import RecipeListItem from "./RecipeListItem";
import {RecipeContext} from "../contexts/RecipeContext";


const RecipesList = () => {
  const { recipes } = useContext(RecipeContext);

    return (
        <main className="main" role="main">
          <div className="wrap clearfix">
            <div className="row">
              <header className="s-title">
                <h1>Recipes</h1>
              </header>

              <section className="content three-fourth">
                  <div className="entries row">
                    {recipes.length > 0
                        ? recipes.map(x =>
                            <Link to={`/recipes/${x._id}`} className="details-button">
                                <RecipeListItem key={x._id} recipe={x} />
                            </Link>
                        )
                        : <h3 className="no-articles">No recipes yet</h3>
                    }
                  </div>
              </section>

              {/*<aside className="sidebar one-fourth">*/}
              {/*  <div className="widget">*/}
              {/*    <ul className="categories right">*/}
              {/*      <li className="active"><a href="#">All recipes</a></li>*/}
              {/*      <li><a href="#">Apetizers</a></li>*/}
              {/*      <li><a href="#">Cocktails</a></li>*/}
              {/*      <li><a href="#">Deserts</a></li>*/}
              {/*      <li><a href="#">Eggs</a></li>*/}
              {/*      <li><a href="#">Equipment</a></li>*/}
              {/*      <li><a href="#">Events</a></li>*/}
              {/*      <li><a href="#">Fish</a></li>*/}
              {/*      <li><a href="#">Fitness</a></li>*/}
              {/*      <li><a href="#">Healthy</a></li>*/}
              {/*      <li><a href="#">Asian</a></li>*/}
              {/*      <li><a href="#">Mexican</a></li>*/}
              {/*      <li><a href="#">Pizza</a></li>*/}
              {/*      <li><a href="#">Kids</a></li>*/}
              {/*      <li><a href="#">Meat</a></li>*/}
              {/*      <li><a href="#">Snacks</a></li>*/}
              {/*      <li><a href="#">Salads</a></li>*/}
              {/*      <li><a href="#">Storage</a></li>*/}
              {/*      <li><a href="#">Vegetarian</a></li>*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*  <div className="widget">*/}
              {/*    <h3>Advertisment</h3>*/}
              {/*    <a href="#"><img src="images/advertisment.jpg" alt="" /></a>*/}
              {/*  </div>*/}
              {/*</aside>*/}

          </div>

          </div>
        </main>
    );
};

export default RecipesList;