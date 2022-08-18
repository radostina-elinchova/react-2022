import {useContext, useState} from "react";
import { useNavigate, Link} from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import * as authService from "../services/authService";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState("");
    const [values, setValues] = useState({
        email: '',
        password: '',

    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = values

        authService.login(email, password)
            .then(authData => {
                if(authData.message){
                    setSubmitError(authData.message)
                }
                else {
                    userLogin(authData);
                    navigate('/');
                    setSubmitError(state => state)
                }

            });

    };

    return (
                <div className="row">
                    <section className="content center full-width">
                        <div className="modal container">
                            <h3>Login</h3>
                            <form onSubmit={submitHandler}>
                                <div className="f-row">
                                    <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} placeholder="Your email"/>
                                </div>
                                <div className="f-row">
                                    <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} placeholder="Your password"/>
                                </div>
                                <div className="f-row bwrap">
                                    <button type="submit" >login</button>
                                </div>
                                {submitError &&
                                    <p className="error_text">
                                        {submitError}
                                    </p>
                                }
                            </form>
                            <p>Dont have an account yet? <Link to="/register">Sign up.</Link></p>

                        </div>
                    </section>
                </div>

    );
};

export default Login;