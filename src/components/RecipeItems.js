import {useContext, useEffect, useState} from 'react';


const RecipeItems = ({addSteps, removeSteps, currentRecipe}) => {

    console.log("recipe",currentRecipe)
    const[step, setStep] = useState("");

    const[ingredients, setIngredients] = useState([]);

    const[ingredient, setIngredient] = useState([{
        name: "",
        quantity: 0,
        categoryIngr: 'Deserts',
    }])

    const changeStepHandler = (e) => {
        setStep( e.target.value);
    };

    const changeIngrHandler = (e) => {
        setIngredient(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };





    const addIngredientHandler = (e) => {
        console.log("rrr",e)
        setIngredients(state => [...state, ingredient]);
        console.log("ingredients",ingredients)
    };
    const removeIngrHandler = (ingredient) => {
        console.log("current",ingredient)
        setIngredients(state => state.filter(x => x.name !== ingredient.name));
        console.log("removed",ingredient)
    };
    const addStepHandler = (e) => {
        console.log("step",step)
        console.log("event",e.target.name)
        addSteps(step);
        setStep("")

    };
    const removeStepHandler = (e, step) => {
        removeSteps(step);
    };
    return (
        <>
            <section>
                <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>
                <ul className="steps-list">

                    {currentRecipe.steps?.map((x) =>
                        <li key={x}>
                            <p>{x}</p>
                            <button className="remove" type="button" onClick={(e) => removeStepHandler(e, x)}>-</button>
                        </li>
                    )}
                </ul>
                <div className="f-row instruction">
                    <div className="full">
                        <input id="step" name="step" type="text" value={step} onChange={changeStepHandler} placeholder="Instructions"/>
                    </div>
                </div>
                <div className="f-row full">
                    <button className="add" type="button" onClick={addStepHandler}>Add a step</button>
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
                                <button className="remove" onClick={() => removeIngrHandler(x)}>-</button>
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
                                <option value="handful">handful</option>
                                <option value="ml">ml</option>
                                <option value="g">g</option>
                                <option value="tbsp">tbsp</option>
                            </select>
                        </div>
                        {/*<button className="remove">-</button>*/}
                    </div>


                </div>
                <div className="f-row full">
                    <button id="submitIngredient" type="button" onClick={addIngredientHandler}>Add an ingredient</button>
                </div>

            </section>
        </>

    );
};

export default RecipeItems;