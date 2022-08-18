import {AuthContext } from "../contexts/AuthContext";
import {useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";
import MyRecipesList from "./MyRecipesList";


const ProfileDetails = () => {
    const { user } = useContext(AuthContext);
    return (

        <section className="content">
            <div className="row">
                <div className="my_account  one-fourth">
                    <figure>
                        <img src={user.imageUrl} alt=""/>
                    </figure>
                    <div className="container">
                        <h2>{user.name}</h2>
                    </div>
                </div>
                <div className="three-fourth">
                    <nav className="tabs">
                        <ul>
                            <li className="">
                                <Link to="/profileDetails/about" title="About me">
                                    About me
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/profileDetails/myrecipes" title="About me">
                                    My recipes
                                </Link>
                            </li>

                        </ul>
                    </nav>
                    <Routes>
                        <Route path="myrecipes" element={<MyRecipesList />} />
                        <Route path="about" element={
                            <div className="tab-content" id="about" >
                                <div className="row">
                                    <dl className="basic two-fourth">
                                        <dt>Name</dt>
                                        <dd>{user.name}</dd>
                                        <dt>Email</dt>
                                        <dd>{user.email}</dd>
                                    </dl>
                                </div>
                            </div>

                        } />
                    </Routes>
                </div>
            </div>
        </section>



    )
}
export default ProfileDetails