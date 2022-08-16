import {useState, useContext} from "react";
import {RecipeContext} from "../contexts/RecipeContext";
import {Link} from "react-router-dom";
import RecipeListItem from "./RecipeListItem";

const Search = () => {
    const {filterRecipes, filteredRecipes} = useContext(RecipeContext)
    const [search, setSearch] = useState( []);
    const [criteria, setCriteria] = useState( []);


    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const onSearchSubmit = (e) => {
        e.preventDefault();
        filterRecipes(search, criteria);
    }

    const onSearchCriteriaChange = (e) => {
        setCriteria(e.target.value)
    }

    return (
        <>
            <form className="content full-width" onSubmit={onSearchSubmit}>
                <div className="container recipefinder">

                        <div className="row">
                            <div className=" one-half">
                                <input type="search" name="search" onChange={onSearchChange}placeholder="Find recipe by criteria"/>
                            </div>
                            <div className="one-half">
                                <div className="selector">
                                    <select name="criteria" onChange={onSearchCriteriaChange}>
                                        <option value="all">all</option>
                                        <option value="title">title</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="f-row">
                            <input type="submit" value="Search"/>
                        </div>
                </div>

            </form>
            <section className="content three-fourth">
                <div className="entries row">
                    {filteredRecipes.length > 0
                        ? filteredRecipes.map(x =>
                            <Link to={`/recipes/${x._id}`} className="details-button">
                                <RecipeListItem key={x._id} recipe={x} />
                            </Link>
                        )
                        : <h3 className="no-articles">No recipes yet</h3>
                    }
                </div>
            </section>
    </>
    );
};

export default Search;