const RecipesList = () => {
    return (
        <main className="main" role="main">
          <div className="wrap clearfix">
            <div className="row">
              <header className="s-title">
                <h1>Recipes</h1>
              </header>

              <section className="content three-fourth">
                {/*entries*/}
                <div className="entries row">
                  {/*item*/}
                  <div className="entry one-third">
                    <figure>
                      <img src="images/img6.jpg" alt="" />
                      <figcaption><a href="recipe.html"><i className="icon icon-themeenergy_eye2" /> <span>View recipe</span></a></figcaption>
                    </figure>
                    <div className="container">
                      <h2><a href="recipe.html">Thai fried rice with fruit and vegetables</a></h2>
                      <div className="actions">
                        <div>
                          <div className="difficulty"><i className="ico i-medium" /><a href="#">medium</a></div>
                          <div className="likes"><i className="fa fa-heart" aria-hidden="true" /><a href="#">10</a></div>
                          <div className="comments"><i className="fa fa-comment" aria-hidden="true" /><a href="recipe.html#comments">27</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*item*/}
                  {/*item*/}
                  <div className="entry one-third">
                    <figure>
                      <img src="images/img5.jpg" alt="" />
                      <figcaption><a href="recipe.html"><i className="icon icon-themeenergy_eye2" /> <span>View recipe</span></a></figcaption>
                    </figure>
                    <div className="container">
                      <h2><a href="recipe.html">Spicy Morroccan prawns with cherry tomatoes</a></h2>
                      <div className="actions">
                        <div>
                          <div className="difficulty"><i className="ico i-hard" /><a href="#">hard</a></div>
                          <div className="likes"><i className="fa fa-heart" aria-hidden="true" /><a href="#">10</a></div>
                          <div className="comments"><i className="fa fa-comment" aria-hidden="true" /><a href="recipe.html#comments">27</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*item*/}
                  {/*item*/}
                  <div className="entry one-third">
                    <figure>
                      <img src="images/img8.jpg" alt="" />
                      <figcaption><a href="recipe.html"><i className="icon icon-themeenergy_eye2" /> <span>View recipe</span></a></figcaption>
                    </figure>
                    <div className="container">
                      <h2><a href="recipe.html">Super easy blueberry cheesecake</a></h2>
                      <div className="actions">
                        <div>
                          <div className="difficulty"><i className="ico i-easy" /><a href="#">easy</a></div>
                          <div className="likes"><i className="fa fa-heart" aria-hidden="true" /><a href="#">10</a></div>
                          <div className="comments"><i className="fa fa-comment" aria-hidden="true" /><a href="recipe.html#comments">27</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*item*/}




                </div>
                {/*//entries*/}
              </section>

              <aside className="sidebar one-fourth">
                <div className="widget">
                  <ul className="categories right">
                    <li className="active"><a href="#">All recipes</a></li>
                    <li><a href="#">Apetizers</a></li>
                    <li><a href="#">Cocktails</a></li>
                    <li><a href="#">Deserts</a></li>
                    <li><a href="#">Eggs</a></li>
                    <li><a href="#">Equipment</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Fish</a></li>
                    <li><a href="#">Fitness</a></li>
                    <li><a href="#">Healthy</a></li>
                    <li><a href="#">Asian</a></li>
                    <li><a href="#">Mexican</a></li>
                    <li><a href="#">Pizza</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Meat</a></li>
                    <li><a href="#">Snacks</a></li>
                    <li><a href="#">Salads</a></li>
                    <li><a href="#">Storage</a></li>
                    <li><a href="#">Vegetarian</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h3>Advertisment</h3>
                  <a href="#"><img src="images/advertisment.jpg" alt="" /></a>
                </div>
              </aside>
              {/*//right sidebar*/}
          </div>

          </div>
        </main>
    );
};

export default RecipesList;