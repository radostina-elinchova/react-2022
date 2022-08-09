const CreateRecipe = () => {
    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <header className="s-title">
                        <h1>Add a new recipe</h1>
                    </header>
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form>
                                <section>
                                    <h2>Basics</h2>
                                    <p>All fields are required.</p>
                                    <div className="f-row">
                                        <div className="full"><input type="text" placeholder="Recipe title"/></div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third"><input type="text" placeholder="Preparation time"/></div>
                                        <div className="third"><input type="text" placeholder="Cooking time"/></div>
                                        <div className="third"><input type="text" placeholder="Difficulty"/></div>
                                    </div>
                                    <div className="f-row">
                                        <div className="third"><input type="text"
                                                                      placeholder="Serves how many people?"/></div>
                                        <div className="third">
                                            <div className="selector" style={{width: '146.117px'}}><span style={{
                                                width: '134.117px',
                                                userSelect: 'none'
                                            }}>Select a category</span>
                                                <select>
                                                    <option>Select a category</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Description</h2>
                                    <div className="f-row">
                                        <div className="full"><textarea placeholder="Recipe title" defaultValue={""}/>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Ingredients</h2>
                                    <div className="f-row ingredient">
                                        <div className="large"><input type="text" placeholder="Ingredient"/></div>
                                        <div className="small"><input type="text" placeholder="Quantity"/></div>
                                        <div className="third">
                                            <div className="selector" style={{width: '146.117px'}}>
                                                <span style={{
                                                    width: '134.117px',
                                                    userSelect: 'none'
                                                }}>Select a category</span><select>
                                                <option>Select a category</option>
                                            </select></div>
                                        </div>
                                        <button className="remove">-</button>
                                    </div>
                                    <div className="f-row full">
                                        <button className="add">Add an ingredient</button>
                                    </div>
                                </section>
                                <section>
                                    <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>
                                    <div className="f-row instruction">
                                        <div className="full"><input type="text" placeholder="Instructions"/></div>
                                        <button className="remove">-</button>
                                    </div>
                                    <div className="f-row full">
                                        <button className="add">Add a step</button>
                                    </div>
                                </section>
                                <section>
                                    <h2>Photo</h2>
                                    <div className="f-row full">
                                        <div className="uploader">
                                            <input type="file"/><span className="filename" style={{userSelect: 'none'}}>No file selected</span>
                                            <span className="action" style={{userSelect: 'none'}}>Choose File</span>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2>Status <span>(would you like to further edit this recipe or are you ready to publish it?)</span>
                                    </h2>
                                    <div className="f-row full">
                                        <div className="radio" id="uniform-r1"><span><input type="radio" id="r1"
                                                                                            name="radio"/></span></div>
                                        <label htmlFor="r1">I am still working on it</label>
                                    </div>
                                    <div className="f-row full">
                                        <div className="radio" id="uniform-r2"><span><input type="radio" id="r2"
                                                                                            name="radio"/></span></div>
                                        <label htmlFor="r2">I am ready to publish this recipe</label>
                                    </div>
                                </section>
                                <div className="f-row full">
                                    <input type="submit" className="button" id="submitRecipe"
                                           defaultValue="Publish this recipe"/>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    );
};

export default CreateRecipe;