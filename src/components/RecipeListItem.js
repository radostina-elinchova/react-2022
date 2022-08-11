const RecipesListItem = ({recipe}) => {

    return (
        <div className="entry one-third">
            <figure>
                <img src="images/img6.jpg" alt="" />
                <figcaption>
                    <a href="recipe.html"><i className="icon icon-themeenergy_eye2" />
                        <span>View recipe</span>
                    </a>
                </figcaption>
            </figure>
            <div className="container">
                <h2><a href="recipe.html">{recipe.title} </a></h2>
                <div className="actions">
                    <div>
                        <div className="difficulty">
                            <i className="ico i-medium" />
                            <a href="#">{recipe.difficulty}</a>
                        </div>
                        <div className="comments">
                            <i className="fa fa-comment" aria-hidden="true" />
                            <a href="recipe.html#comments">27</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesListItem;