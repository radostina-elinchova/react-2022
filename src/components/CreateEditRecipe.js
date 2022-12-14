import {useContext, useState, useEffect} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { AuthContext } from '../contexts/AuthContext';
import * as recipeService from '../services/recipeService';
import { useNavigate } from "react-router-dom";

const CreateEditRecipe = ({method, recipeId}) => {
    const {user} = useContext(AuthContext);

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
        postedBy: user.name,
    });
    const { recipeEdit, recipeAdd } = useContext(RecipeContext);
    const navigate = useNavigate();
    const[step, setStep] = useState("");
    const[steps, setSteps] = useState([]);
    const[ingredients, setIngredients] = useState([]);
    const[ingredient, setIngredient] = useState({
        name: "",
        quantity: 0,
        categoryIngr: 'ml',
    })
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if(recipeId) {
            recipeService.getOne(recipeId)
                .then(recipeData => {
                    setValues(recipeData);
                    setSteps(recipeData.steps);
                    setIngredients(recipeData.ingredients);
                })
        }
    }, []);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const changeIngrHandler = (e) => {
        setIngredient(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const changeStepHandler = (e) => {
        setStep(e.target.value
        );
    };

    const addStepHandler = () => {
        setSteps(state => [...state, step]);
        setStep("")
    };

    const removeStepHandler = (step) => {
        console.log("current",steps)
        setSteps(state => state.filter(x => x !== step));
        console.log("removed",steps)
    };

    const addIngredientHandler = (e) => {
        setIngredients(state => [...state,  ingredient]);
        setIngredient(state => ({
                name: "",
                quantity: 0,
                categoryIngr: 'ml'
            }))
        console.log("ingredients",ingredients)

    };
    const removeIngrHandler = (ingredient) => {
        console.log("current",ingredient)
        setIngredients(state => state.filter(x => x.name !== ingredient.name));
        console.log("removed",ingredient)
    };

    const isIngredientValid =Number(ingredient.quantity) > 0;
    const isStepValid = step.length > 0
    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    }
    const isFormValid = !Object.values(errors).some(x => x) && ingredients.length>0&& steps.length>0

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {...values, steps, ingredients}

        if (method === "edit") {
            recipeService.edit(recipeId, data)
                .then(result => {
                    recipeEdit(recipeId, result)
                    navigate(`/recipes/${recipeId}`);
                });
             }
        else{
            recipeService.create(data)
                .then(result => {
                    recipeAdd(result)
                    navigate('/recipes');
                });
        }
     };

    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <header className="s-title">
                        <h1>{method} the recipe</h1>
                    </header>
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form onSubmit={onSubmit}>
                                <section>
                                    <h2>Basics</h2>
                                    <p>All fields are required.</p>
                                    <div className="f-row">
                                        <div className="full">
                                            <input id="title" name="title" type="text" value={values.title} onChange={changeHandler} placeholder="Recipe title" onBlur={(e) => minLength(e, 1)}/>
                                            {errors.title &&
                                                <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                    The field is required!
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third">
                                            <input id="prepTime" name="prepTime" type="text" value={values.prepTime} onChange={changeHandler} placeholder="Preparation time" onBlur={(e) => minLength(e, 1)}/>
                                            {errors.prepTime &&
                                                <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                    The field is required!
                                                </p>
                                            }
                                        </div>
                                        <div className="third">
                                            <input id="cookTime" name="cookTime" type="text" value={values.cookTime} onChange={changeHandler} placeholder="Cooking time" onBlur={(e) => minLength(e, 1)}/>
                                            {errors.cookTime &&
                                                <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                    The field is required!
                                                </p>
                                            }
                                        </div>
                                        <div className="third">
                                            <input id="difficulty" name="difficulty" type="text" value={values.difficulty} onChange={changeHandler} placeholder="Difficulty" onBlur={(e) => minLength(e, 1)}/>
                                            {errors.difficulty &&
                                                <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                    The field is required!
                                                </p>
                                            }
                                        </div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third">
                                            <input id="servings" name="servings" type="text" value={values.servings} onChange={changeHandler} placeholder="Serves how many people?" onBlur={(e) => minLength(e, 1)}/>
                                            {errors.servings &&
                                                <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                    The field is required!
                                                </p>
                                            }
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
                                            <textarea id="description" name="description" value={values.description} onChange={changeHandler} placeholder="Recipe description" />
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
                                    <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>
                                    <ul className="steps-list">
                                        {steps?.map((x) =>
                                            <li key={x}>
                                                <p>{x}</p>
                                                <button className="remove" type="button" onClick={() => removeStepHandler(x)}>-</button>
                                            </li>
                                        )}
                                    </ul>
                                    <div className="f-row instruction">
                                        <div className="full">
                                            <input id="step" name="step" type="text" value={step} onChange={changeStepHandler} placeholder="Instructions"/>
                                        </div>
                                    </div>
                                    {!isStepValid &&
                                        <p style={{  color: "#F4716A", display: "inline-block" }}>
                                            The field is required!
                                        </p>
                                    }
                                    <div className="f-row full">
                                        <button className="add button" type="button" onClick={addStepHandler} disabled={!isStepValid}>Add a step</button>
                                    </div>
                                </section>
                                <section>
                                    <h2>Ingredients</h2>
                                    <ul className="comment-list">
                                        {ingredients?.map((x) =>
                                            <li key={x}>
                                                <div>
                                                    <p>{x.name}</p>
                                                    <p>{x.quantity}</p>
                                                    <p>{x.categoryIngr}</p>
                                                    <button className="remove" type="button" onClick={() => removeIngrHandler(x)}>-</button>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                    <div className="f-row ingredient">
                                        <div className="large">
                                            <input id="name" name="name" type="text" value={ingredient.name} onChange={changeIngrHandler} placeholder="Ingredient"/>
                                        </div>
                                        <div className="small">
                                            <input id="quantity" name="quantity" type="text" value={ingredient.quantity} onChange={changeIngrHandler} placeholder="Quantity"/>
                                        </div>

                                        <div className="third">
                                            <div className="selector" style={{width: '146.117px'}}>
                                                <span style={{ width: '134.117px' }}> {ingredient.categoryIngr}</span>
                                                <select
                                                    className="selector"
                                                    style={{ width: '146.117px' }}
                                                    name="categoryIngr" id="categoryIngr"
                                                    onChange={changeIngrHandler}
                                                >
                                                    <option value="ml">ml</option>
                                                    <option value="g">g</option>
                                                    <option value="tbsp">tbsp</option>
                                                </select>
                                            </div>
                                            {/*<button className="remove">-</button>*/}
                                        </div>
                                        {!isStepValid &&
                                            <p style={{  color: "#F4716A", display: "inline-block" }}>
                                                All fields are required
                                            </p>
                                        }
                                    </div>
                                    <div className="f-row full">
                                        <button id="submitIngredient"  className="button" type="button" disabled={!isIngredientValid} onClick={addIngredientHandler} >Add an ingredient</button>
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
                                    <button id="submitRecipe" className="button" type="submit"  disabled={!isFormValid} >Publish this recipe</button>
                                    <button id="close"  style={{marginLeft:'15px'}} className="button" type="button" onClick={() => navigate(-1)}>Close</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default CreateEditRecipe;