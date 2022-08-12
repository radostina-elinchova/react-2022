const RecipesListItem = ({recipe}) => {

    return (
        <div className="entry one-third">
            <figure>
                <img src={recipe.pictureUrl} alt="" />
                <figcaption>
                    <i className="icon icon-themeenergy_eye2" />
                    <span>View recipe</span>
                </figcaption>
            </figure>
            <div className="container">
                <h2> {recipe.title} </h2>
                <div className="actions">
                    <div>
                        <div className="difficulty">
                            <i className="ico i-medium" />
                            <span>{recipe.difficulty}</span>
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