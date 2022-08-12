import {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
           <div className="intro">
               <figure className="bg"><img src="images/intro.jpg" alt="" /></figure>

               <div className="wrap clearfix">
                   <div className="row">
                       <article className="three-fourth text">
                           <h1>Welcome to SocialChef!</h1>
                           <p>SocialChef is the ultimate <strong>cooking social community</strong>, where recipes come to life. Wanna know what you will gain by joining us? Lorem ipsum dolor sit amet, this is some teaser text.</p>
                           <p>You will win awesome prizes, make new friends and share delicious recipes. </p>
                           { !isAuthenticated &&
                               <>
                                   <Link to="/register" className="button white more medium">Join our community <i className="fa fa-chevron-right" aria-hidden="true" /></Link>
                                   <p>Already a member? Click <Link to="/login">here</Link> to login.</p>
                               </>
                           }
                       </article>
                   </div>
               </div>
           </div>
        </>
   );
}

export default Home;