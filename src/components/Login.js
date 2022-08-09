const Login = () => {
    return (
        <main className="main" role="main">

            <div className="wrap clearfix">

                <div className="row">

                    <section className="content center full-width">
                        <div className="modal container">
                            <h3>Login</h3>
                            <div className="f-row">
                                <input type="text" placeholder="Your username"/>
                            </div>
                            <div className="f-row">
                                <input type="password" placeholder="Your password"/>
                            </div>

                            <div className="f-row">
                                <div className="checker"><span><input type="checkbox"/></span></div>
                                <label>Remember me next time</label>
                            </div>

                            <div className="f-row bwrap">
                                <input type="submit" value="login"/>
                            </div>
                            <p><a href="#">Forgotten password?</a></p>
                            <p>Dont have an account yet? <a href="register.html">Sign up.</a></p>
                        </div>
                    </section>

                </div>

            </div>


        </main>

    );
};

export default Login;