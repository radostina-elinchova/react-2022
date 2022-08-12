import {useContext, useState} from 'react';

import { RecipeContext } from '../contexts/RecipeContext';
import * as recipeService from '../services/recipeService';
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
    const { recipeAdd } = useContext(RecipeContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: '',
        prepTime: '',
        cookTime: '',
        difficulty: '',
        servings: '',
        category: 'Deserts',
        description: '',
        pictureUrl: '',
        radio: 'ready',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault();

        recipeService.create(values)
            .then(result => {
                recipeAdd(result)
                navigate('/recipes');
            });
    };

    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <header className="s-title">
                        <h1>Add a new recipe</h1>
                    </header>
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form onSubmit={onSubmit}>
                                <section>
                                    <h2>Basics</h2>
                                    <p>All fields are required.</p>
                                    <div className="f-row">
                                        <div className="full">
                                            <input id="title" name="title" type="text" value={values.title} onChange={changeHandler} placeholder="Recipe title"/>
                                        </div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third">
                                            <input id="prepTime" name="prepTime" type="text" value={values.prepTime} onChange={changeHandler} placeholder="Preparation time"/>
                                        </div>
                                        <div className="third">
                                            <input id="cookTime" name="cookTime" type="text" value={values.cookTime} onChange={changeHandler} placeholder="Cooking time"/>
                                        </div>
                                        <div className="third">
                                            <input id="difficulty" name="difficulty" type="text" value={values.difficulty} onChange={changeHandler} placeholder="Difficulty"/>
                                        </div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third">
                                            <input id="servings" name="servings" type="text" value={values.servings} onChange={changeHandler} placeholder="Serves how many people?"/>
                                        </div>
                                        <div className="third">
                                            <div className="selector" style={{ width: '146.117px' }}>
                                                <span style={{ width: '134.117px' }}>
                                                    {values.category}
                                                </span>
                                                <select  className="selector" style={{ width: '146.117px' }} name="category" id="category" onChange={changeHandler}>
                                                    <option value="Deserts">Deserts</option>
                                                    <option value="Salads">Salads</option>
                                                    <option value="Meat">Meat</option>
                                                    <option value="Apetizers">Apetizers</option>
                                                    <option value="Soups">Soups</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Description</h2>
                                    <div className="f-row">
                                        <div className="full">
                                            <textarea id="description" name="description" value={values.description} onChange={changeHandler} placeholder="Recipe description" defaultValue={""}/>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Photo</h2>
                                    <div className="f-row full">
                                        <div >
                                            <input id="pictureUrl" name="pictureUrl" type="text" value={values.pictureUrl} onChange={changeHandler} placeholder="Choose File Url"/>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Status <span>(would you like to further edit this recipe or are you ready to publish it?)</span>
                                    </h2>
                                    <div className="f-row full">
                                        <div className="radio" id="uniform-r1">
                                            <span>
                                               <input type="radio" id="r1" name="radio" value="notready" onChange={changeHandler} checked={values.radio == 'notready'} />
                                            </span>
                                        </div>
                                        <label htmlFor="r1">I am still working on it</label>
                                    </div>
                                    <div className="f-row full">
                                        <div className="radio" id="uniform-r2">
                                            <span>
                                                <input type="radio" id="r2"  name="radio" value="ready" onChange={changeHandler} checked={values.radio == 'ready'}/>
                                            </span>
                                        </div>
                                        <label htmlFor="r2">I am ready to publish this recipe</label>

                                    </div>
                                </section>

                                <div className="f-row full">
                                    <button id="submitRecipe" className="button" type="submit" >Publish this recipe</button>
                                    <button id="close"  style={{marginLeft:'15px'}} className="button" type="button" onClick={() => navigate(-1)}>Close</button>
                                </div>

                                {/*<section>*/}
                                {/*    <h2>Ingredients</h2>*/}
                                {/*    <div className="f-row ingredient">*/}
                                {/*        <div className="large"><input type="text" placeholder="Ingredient"/></div>*/}
                                {/*        <div className="small"><input type="text" placeholder="Quantity"/></div>*/}
                                {/*        <div className="third">*/}
                                {/*            <div className="selector" style={{width: '146.117px'}}>*/}
                                {/*                <span style={{*/}
                                {/*                    width: '134.117px',*/}
                                {/*                    userSelect: 'none'*/}
                                {/*                }}>Select a category</span><select>*/}
                                {/*                <option>Select a category</option>*/}
                                {/*            </select></div>*/}
                                {/*        </div>*/}
                                {/*        <button className="remove">-</button>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <button className="add">Add an ingredient</button>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>*/}
                                {/*    <div className="f-row instruction">*/}
                                {/*        <div className="full"><input type="text" placeholder="Instructions"/></div>*/}
                                {/*        <button className="remove">-</button>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <button className="add">Add a step</button>*/}
                                {/*    </div>*/}
                                {/*</section>*/}






                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    );
};

export default CreateRecipe;