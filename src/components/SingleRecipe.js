import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../contexts/RecipeContext';
import * as recipeService from '../services/recipeService';
import * as commentService from '../services/commentService';
import {AuthContext } from "../contexts/AuthContext";



const SingleRecipe = () => {
    const navigate = useNavigate();
    const { fetchRecipeDetails, selectRecipe, recipeRemove, addComment } = useContext(RecipeContext);
    const { recipeId } = useParams();
    const { user, isAuthenticated } = useContext(AuthContext);
    const currentRecipe = selectRecipe(recipeId);



    useEffect(() => {
        singlePageDetails()

    }, [])

    const singlePageDetails = (async () => {
        const recipeDetails = await recipeService.getOne(recipeId);
        const recipeComments = await commentService.getByRecipeId(recipeId);

        console.log("recipeComents", recipeComments)
        fetchRecipeDetails(recipeId, { ...recipeDetails, comments: recipeComments });

    })

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = formData.get('commentText');
        console.log("comment text",comment)
        commentService.create(recipeId, comment)
            .then(result => {
                addComment(recipeId, comment);
            });
        console.log("comment",comment);
        singlePageDetails();
        document.getElementById('commentTextArea').value = '';
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

                                    <div className="image">
                                        <a href="#">
                                            <img src={currentRecipe.pictureUrl} />
                                        </a>
                                    </div>
                                    <div className="intro">
                                        <p><strong>{currentRecipe.title}</strong></p>
                                        <p>{currentRecipe.description}</p></div>
                                    <div className="instructions">
                                        <ol>
                                            {currentRecipe.steps?.map((x) =>
                                                <li key={x}>{x}</li>
                                            )}
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
                                        <dt>Posted by </dt>
                                        <dd>{currentRecipe.postedBy}</dd>
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
                                <h2>{!currentRecipe.comments ? 0 : currentRecipe.comments.length} comment/s </h2>
                                <ol className="comment-list">
                                    {currentRecipe.comments?.map((x) =>
                                        <li key={x._id} className="comment depth-1">
                                            <div className="avatar">
                                                <img  src={x.user?.imageUrl } alt=""/>
                                            </div>
                                            <div className="comment-box">
                                                <div className="comment-author meta">
                                                    <strong>{x.user?.name }</strong> said {x._createdOn} ago
                                                    {isAuthenticated && user._id === currentRecipe._ownerId &&
                                                        <a href="#comment-form" className="comment-reply-link"> Reply </a>
                                                    }
                                                </div>
                                                <div className="comment-text">
                                                    <p>{x.text}</p>
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
                                        <form onSubmit={ addCommentHandler } id="comment-form">
                                            <div className="f-row">
                                                <textarea id="commentTextArea"
                                                    name="commentText"
                                                    defaultValue={""}
                                                    placeholder="Please enter your reply"
                                                />
                                            </div>

                                            <div className="f-row">
                                                <div className="third bwrap">
                                                    <button id="submitComment" type="submit" >Submit comment</button>
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