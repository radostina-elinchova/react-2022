import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../contexts/RecipeContext';
import * as recipeService from '../services/recipeService';
import {AuthContext} from "../contexts/AuthContext";


const SingleRecipe = () => {
    const navigate = useNavigate();
    const { fetchRecipeDetails, selectRecipe, recipeRemove, } = useContext(RecipeContext);
    const { recipeId } = useParams();
    const { user } = useContext(AuthContext);
    const currentRecipe = selectRecipe(recipeId);

    useEffect(() => {
        (async () => {
            const recipeDetails = await recipeService.getOne(recipeId);
            fetchRecipeDetails(recipeId, { ...recipeDetails });
        })();
    }, [])


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
            {/*wrap*/}
            <div className="wrap clearfix">

                <div className="row">
                    <header className="s-title">
                        <h1>A luxurious black &amp; white chocolate cupcake</h1>

                    </header>
                    {/*content*/}
                    <section className="content three-fourth">
                        {/*recipe*/}
                        <div className="recipe">
                            <div className="row">

                                {/*two-third*/}
                                <article className="two-third">
                                    { user.email &&
                                        <>
                                            <Link to={`/recipes/${recipeId}/edit`}>
                                                <button id="editRecipe" className="button" type="button">Edit this recipe</button>
                                            </Link>
                                            <button id="removeRecipe" style={{marginLeft:'15px'}} className="button" type="button" onClick={recipeDeleteHandler}>Delete this recipe</button>
                                        </>
                                    }

                                    <div className="image"><a href="#"><img src="images/img.jpg" alt="" /></a></div>
                                    <div className="intro"><p><strong>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</strong></p> <p>Molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p></div>
                                    <div className="instructions">
                                        <ol>
                                            <li>Heat oven to 160C/140C fan/gas 3 and line a 12-hole muffin tin with cases. Gently melt the butter, chocolate, sugar and 100ml hot water together in a large saucepan, stirring occasionally, then set aside to cool a little while you weigh the other ingredients.</li>
                                            <li>Stir the eggs and vanilla into the chocolate mixture. Put the flour into a large mixing bowl, then stir in the chocolate mixture until smooth. Spoon into cases until just over three-quarters full (you may have a little mixture leftover), then set aside for 5 mins before putting on a low shelf in the oven and baking for 20-22 mins. Leave to cool.</li>
                                            <li>For the icing, melt the chocolate in a heatproof bowl over a pan of barely simmering water. Once melted, turn off the heat, stir in the double cream and sift in the icing sugar. When spreadable, top each cake with some and decorate with your favourite sprinkles and sweets.</li>
                                        </ol>
                                    </div>
                                </article>
                                {/*//two-third*/}
                                {/*one-third*/}
                                <article className="one-third">
                                    <dl className="basic">
                                        <dt>Preparation time</dt>
                                        <dd>15 mins</dd>
                                        <dt>Cooking time</dt>
                                        <dd>30 mins</dd>
                                        <dt>Difficulty</dt>
                                        <dd>easy</dd>
                                        <dt>Serves</dt>
                                        <dd>4 people</dd>
                                    </dl>
                                    <dl className="user">
                                        <dt>Category</dt>
                                        <dd>Deserts</dd>
                                        <dt>Posted by</dt>
                                        <dd>Jennifer W.</dd>
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
                                {/*//one-third*/}
                            </div>
                        </div>
                        {/*//recipe*/}
                        {/*comments*/}
                        <div className="comments" id="comments">
                            <h2>5 comments </h2>
                            <ol className="comment-list">
                                {/*comment*/}
                                <li className="comment depth-1">
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar1.jpg" alt="" /></a></div>
                                    <div className="comment-box">
                                        <div className="comment-author meta">
                                            <strong>Kimberly C.</strong> said 1 month ago <a href="#" className="comment-reply-link"> Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                        </div>
                                    </div>
                                </li>
                                {/*//comment*/}
                                {/*comment*/}
                                <li className="comment depth-1">
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar2.jpg" alt="" /></a></div>
                                    <div className="comment-box">
                                        <div className="comment-author meta">
                                            <strong>Alex J.</strong> said 1 month ago <a href="#" className="comment-reply-link"> Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                        </div>
                                    </div>
                                </li>
                                {/*//comment*/}
                                {/*comment*/}
                                <li className="comment depth-2">
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar1.jpg" alt="" /></a></div>
                                    <div className="comment-box">
                                        <div className="comment-author meta">
                                            <strong>Kimberly C.</strong> said 1 month ago <a href="#" className="comment-reply-link"> Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                        </div>
                                    </div>
                                </li>
                                {/*//comment*/}
                                {/*comment*/}
                                <li className="comment depth-3">
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar2.jpg" alt="" /></a></div>
                                    <div className="comment-box">
                                        <div className="comment-author meta">
                                            <strong>Alex J.</strong> said 1 month ago <a href="#" className="comment-reply-link"> Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                        </div>
                                    </div>
                                </li>
                                {/*//comment*/}
                                {/*comment*/}
                                <li className="comment depth-1">
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar3.jpg" alt="" /></a></div>
                                    <div className="comment-box">
                                        <div className="comment-author meta">
                                            <strong>Denise M.</strong> said 1 month ago <a href="#" className="comment-reply-link"> Reply</a>
                                        </div>
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                                        </div>
                                    </div>
                                </li>
                                {/*//comment*/}
                            </ol>
                        </div>
                        {/*//comments*/}
                        {/*respond*/}
                        <div className="comment-respond" id="respond">
                            <h2>Leave a reply</h2>
                            <div className="container">
                                <p><strong>Note:</strong> Comments on the web site reflect the views of their authors, and not necessarily the views of the socialchef internet portal. Requested to refrain from insults, swearing and vulgar expression. We reserve the right to delete any comment without notice explanations.</p>
                                <p>Your email address will not be published. Required fields are signed with <span className="req">*</span></p>
                                <form>
                                    <div className="f-row">
                                        <div className="third">
                                            <input type="text" placeholder="Your name" />
                                            <span className="req">*</span>
                                        </div>
                                        <div className="third">
                                            <input type="email" placeholder="Your email" />
                                            <span className="req">*</span>
                                        </div>
                                        <div className="third">
                                            <input type="text" placeholder="Your website" />
                                        </div>
                                    </div>
                                    <div className="f-row">
                                        <textarea defaultValue={""} />
                                    </div>
                                    <div className="f-row">
                                        <div className="third bwrap">
                                            <input type="submit" defaultValue="Submit comment" />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="f-row checkbox">
                                            <div className="checker" id="uniform-ch1"><span><input type="checkbox" id="ch1" /></span></div>
                                            <label htmlFor="ch1">Notify me of replies to my comment via e-mail</label>
                                        </div>
                                        <div className="f-row checkbox">
                                            <div className="checker" id="uniform-ch2"><span><input type="checkbox" id="ch2" /></span></div>
                                            <label htmlFor="ch2">Notify me of new articles by email.</label>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        {/*//respond*/}
                    </section>

                    <aside className="sidebar one-fourth">
                        <div className="widget nutrition">
                            <h3>Nutrition facts <span>(per serving)</span></h3>
                            <table>
                                <tbody><tr>
                                    <td>Calories </td>
                                    <td>505</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>59g</td>
                                </tr>
                                <tr>
                                    <td>Carbs</td>
                                    <td>59g</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td>29g</td>
                                </tr>
                                <tr>
                                    <td>Saturates</td>
                                    <td>17g</td>
                                </tr>
                                <tr>
                                    <td>Fibre</td>
                                    <td>2g</td>
                                </tr>
                                <tr>
                                    <td>Sugar</td>
                                    <td>44g</td>
                                </tr>
                                <tr>
                                    <td>Salt</td>
                                    <td>0.51g</td>
                                </tr>
                                </tbody></table>
                        </div>
                        <div className="widget share">
                            <ul className="boxed">
                                <li className="light"><a href="#" title="Facebook"><i className="fa fa-facebook" aria-hidden="true" /> <span>Share on Facebook</span></a></li>
                                <li className="medium"><a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /> <span>Share on Twitter</span></a></li>
                                <li className="dark"><a href="#" title="Favourites"><i className="fa fa-heart" aria-hidden="true" /> <span>Add to Favourites</span></a></li>
                            </ul>
                        </div>
                        <div className="widget members">
                            <h3>Members who liked this recipe</h3>
                            <ul className="boxed">
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar1.jpg" alt="" /><span>Kimberly C.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar2.jpg" alt="" /><span>Alex J.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar3.jpg" alt="" /><span>Denise M.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar9.jpg" alt="" /><span>Jason H.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar8.jpg" alt="" /><span>Jennifer W.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar4.jpg" alt="" /><span>Anabelle Q.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar7.jpg" alt="" /><span>Thomas M.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar5.jpg" alt="" /><span>Michelle S.</span></a></div></li>
                                <li><div className="avatar"><a href="my_profile.html"><img src="images/avatar6.jpg" alt="" /><span>Bryan A.</span></a></div></li>
                            </ul>
                        </div>
                    </aside>
                    {/*//right sidebar*/}
                </div>
                {/*//row*/}
            </div>
            {/*//wrap*/}
        </main>

    );
};

export default SingleRecipe;