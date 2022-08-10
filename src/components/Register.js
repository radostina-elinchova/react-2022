import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"

import * as authService from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        retypedPassword: '',
        imageUrl: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
        const { name, email, password, imageUrl } = values
        console.log(email);
        console.log(password);
        authService.register(name, email, password, imageUrl)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });

    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    }

    const isPositive = (e) => {
        let number = Number(e.target.value);

        setErrors(state => ({
            ...state,
            [e.target.name]: number < 0,
        }));
    }

    const isFormValid = !Object.values(errors).some(x => x)



    return (

        <div className="row">
            <section className="content center full-width">
                <div className="modal container">
                    <h3>Register</h3>
                    <form onSubmit={submitHandler}>
                        <div className="f-row">
                            <input type="text" id="name" name="name" value={values.name} onChange={changeHandler} placeholder="Your name"/>
                        </div>
                        <div className="f-row">
                            <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} placeholder="Your email"/>
                        </div>
                        <div className="f-row">
                            <input id="imageUrl" name="imageUrl" type="text" value={values.imageUrl} onChange={changeHandler} placeholder="Profile Picture"/>
                        </div>
                        <div className="f-row">
                            <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} placeholder="Your password"/>
                        </div>
                        <div className="f-row">
                            <input type="password" id="retypedPassword" name="retypedPassword" value={values.retypedPassword} onChange={changeHandler} placeholder="Retype password"/>
                        </div>

                        <div className="f-row bwrap">
                            <button type="submit" disabled={!isFormValid}>register</button>
                        </div>
                        <p>Already have an account yet? <Link to="/login">Log in.</Link></p>
                    </form>
                </div>

            </section>
        </div>


    );
};

export default Register;