

const Header = () => {
    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <a href="index.html" title="SocialChef" className="logo">
                    <img src="/images/logo.png" alt="SocialChef logo"/>
                </a>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li><a href="index.html" title="Home"><span>Home</span></a></li>
                        <li><a href="recipes.html" title="Recipes"><span>Recipes</span></a></li>
                        <li>
                            <a href="blog.html" title="Blog"><span>Login</span></a>

                        </li>
                        <li>
                            <a href="blog.html" title="Blog"><span>Register</span></a>

                        </li>

                    </ul>
                </nav>
                <nav className="user-nav" role="navigation">
                    <ul>
                        <li className="light"><a href="find_recipe.html" title="Search for recipes"><i
                            className="icon icon-themeenergy_search"/> <span>Search for recipes</span></a></li>
                        <li className="medium"><a href="my_profile.html" title="My account"><i
                            className="icon icon-themeenergy_chef-hat"/> <span>My account</span></a></li>
                        <li className="dark"><a href="submit_recipe.html" title="Submit a recipe"><i
                            className="icon icon-themeenergy_fork-spoon"/> <span>Submit a recipe</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>


);
};

export default Header;