import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../contexts/RecipeContext';
import * as recipeService from '../services/recipeService';
import * as commentService from '../services/commentService';
import {AuthContext, user} from "../contexts/AuthContext";
;


const SingleRecipe = () => {
    const navigate = useNavigate();
    const { fetchRecipeDetails, selectRecipe, recipeRemove, addComment } = useContext(RecipeContext);
    const { recipeId } = useParams();
    const { user, isAuthenticated } = useContext(AuthContext);
    const currentRecipe = selectRecipe(recipeId);



    const [comment, setComment] = useState({
        content: '',
        emailNotification: false,
    });

    const changeHandler = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    useEffect(() => {
        (async () => {
            const recipeDetails = await recipeService.getOne(recipeId);
            const recipeComments = await commentService.getByRecipeId(recipeId);

            console.log("recipeComents", recipeComments)
            fetchRecipeDetails(recipeId, { ...recipeDetails, comments: recipeComments });
        })();
        console.log("user", user)

    }, [])


    const addCommentHandler = (e) => {
        e.preventDefault();

        commentService.create(recipeId, comment)
            .then(result => {
                addComment(recipeId, comment);
            });
    };

    const recipeDeleteHandler = () => {

        const confirmation = window.confirm('Are you sure you want to delete this recipe?');
        if (confirmation) {
            recipeService.remove(recipeId)
                .then(() => {
                    recipeRemove(recipeId);
                    navigate('/recipes');
                })
        }
    }

    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <header className="s-title">
                        <h1>A luxurious black &amp; white chocolate cupcake</h1>
                    </header>
                    <section className="content three-fourth">
                        <div className="recipe">
                            <div className="row">
                                <article className="two-third">
                                    { isAuthenticated && user._id === currentRecipe._ownerId &&
                                        <>
                                            <Link to={`/recipes/${recipeId}/edit`}>
                                                <button id="editRecipe" className="button" type="button">Edit this recipe</button>
                                            </Link>
                                            <button id="removeRecipe" style={{marginLeft:'15px'}} className="button" type="button" onClick={recipeDeleteHandler}>Delete this recipe</button>
                                        </>
                                    }

                                    <div className="image"><a href="#"><img src={currentRecipe.pictureUrl} /></a></div>
                                    <div className="intro"><p><strong>{currentRecipe.title}</strong></p>
                                        <p>{currentRecipe.description}</p></div>
                                    <div className="instructions">
                                        <ol>
                                            <li>Heat oven to 160C/140C fan/gas 3 and line a 12-hole muffin tin with cases. Gently melt the butter, chocolate, sugar and 100ml hot water together in a large saucepan, stirring occasionally, then set aside to cool a little while you weigh the other ingredients.</li>
                                            <li>Stir the eggs and vanilla into the chocolate mixture. Put the flour into a large mixing bowl, then stir in the chocolate mixture until smooth. Spoon into cases until just over three-quarters full (you may have a little mixture leftover), then set aside for 5 mins before putting on a low shelf in the oven and baking for 20-22 mins. Leave to cool.</li>
                                            <li>For the icing, melt the chocolate in a heatproof bowl over a pan of barely simmering water. Once melted, turn off the heat, stir in the double cream and sift in the icing sugar. When spreadable, top each cake with some and decorate with your favourite sprinkles and sweets.</li>
                                        </ol>
                                    </div>
                                </article>
                                <article className="one-third">
                                    <dl className="basic">
                                        <dt>Preparation time</dt>
                                        <dd>{currentRecipe.prepTime} mins</dd>
                                        <dt>Cooking time</dt>
                                        <dd>{currentRecipe.cookTime} mins</dd>
                                        <dt>Difficulty</dt>
                                        <dd>{currentRecipe.difficulty}</dd>
                                        <dt>Serves</dt>
                                        <dd>{currentRecipe.servings} people</dd>
                                    </dl>
                                    <dl className="user">
                                        <dt>Category</dt>
                                        <dd>{currentRecipe.category}</dd>
                                        <dt>Posted by</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl className="ingredients">
                                        <dt>300g</dt>
                                        <dd>Self-raising flour</dd>
                                        <dt>200g</dt>
                                        <dd>Butter</dd>
                                        <dt>200g</dt>
                                        <dd>Plain chocolate</dd>
                                        <dt>2</dt>
                                        <dd>Eggs</dd>
                                        <dt>1 tbsp</dt>
                                        <dd>Vanilla extract</dd>
                                        <dt>200 g</dt>
                                        <dd>Brown sugar</dd>
                                        <dt>100 ml</dt>
                                        <dd>Double cream</dd>
                                        <dt>handful</dt>
                                        <dd>Sprinkles</dd>
                                    </dl>
                                </article>
                            </div>
                        </div>
                        {currentRecipe.comments &&
                            <div className="comments" id="comments">
                                <h2>{currentRecipe.comments ? 0 : currentRecipe.comments.length + 1} comment/s </h2>
                                <ol className="comment-list">
                                    {currentRecipe.comments?.map(x =>
                                        <li key={x} className="comment depth-1">
                                            <div className="avatar">
                                                <img  src={x.user.imageUrl} alt=""/>
                                            </div>
                                            <div className="comment-box">
                                                <div className="comment-author meta">
                                                    <strong>{x.user.name}</strong> said {x._createdOn} ago
                                                    {isAuthenticated && user._id === currentRecipe._ownerId &&
                                                        <a href="#respond" className="comment-reply-link"> Reply </a>
                                                    }
                                                </div>
                                                <div className="comment-text">
                                                    <p>{x.content}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        }
                        { isAuthenticated && user._id === currentRecipe._ownerId &&
                            <>
                                <div className="comment-respond" id="respond">
                                <h2>Leave a reply</h2>
                                    <div className="container">
                                        <form onSubmit={ addCommentHandler }>
                                            <div className="f-row">
                                                <textarea id="contetnt" name="content"  value={comment.content} onChange={changeHandler} placeholder="Please enter your reply" />
                                            </div>
                                            <div className="f-row">
                                                <div className="third bwrap">
                                                    <button id="submitComment" type="submit" >Submit comment</button>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="f-row checkbox">
                                                    <div className="checker" id="uniform-ch2">
                                                        <span>
                                                            <input type="checkbox" name="emailNotification" id="ch2" checked={comment.emailNotification} onChange={changeHandler}/>
                                                        </span>
                                                    </div>
                                                    <label htmlFor="ch2">Notify me of new articles by email.</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>
                        }
                    </section>
                </div>
            </div>
        </main>
    );
};

export default SingleRecipe;