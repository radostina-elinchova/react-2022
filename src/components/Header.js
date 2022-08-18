import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';


const Header = () => {

    const { isAuthenticated, user } = useContext(AuthContext);

    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <Link to="/" title="SocialChef" className="logo">
                    <img src="/images/logo.png" alt="SocialChef logo"/>
                </Link>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li>
                            <Link to="/" title="Home">
                                <span>Home</span>

                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" title="Recipes">
                                <span>Recipes</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                    <nav className="user-nav" role="navigation">
                        <ul>
                            { isAuthenticated &&
                                <>
                                    <li className="light">
                                        <Link to="/logout" title="ProfileDetails">
                                            <i className="icon icon-themeenergy_chef-hat"/>
                                            <span>Logout</span>
                                        </Link>
                                    </li>
                                    <li className="medium">
                                        <Link to="/profileDetails" title="ProfileDetails">
                                            <i className="icon icon-themeenergy_chef-hat"/>
                                            <span>{user.name}</span>
                                        </Link>
                                    </li>
                                    <li className="dark">
                                        <Link to="/create" title="Submit a recipe">
                                            <i className="icon icon-themeenergy_fork-spoon"/>
                                            <span>Submit a recipe</span>
                                        </Link>
                                    </li>
                                </>
                            }
                            <li className="light">
                                <Link to="/search" title="Search for recipes">
                                    <i className="icon icon-themeenergy_search"></i>
                                    <span>Search for recipes</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

            </div>
        </header>

);
};

export default Header;