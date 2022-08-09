const Register = () => {
    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <section className="content center full-width">
                        <div className="modal container">
                            <h3>Register</h3>
                            <div className="f-row">
                                <input type="text" placeholder="Your name"/>
                            </div>
                            <div className="f-row">
                                <input type="email" placeholder="Your email"/>
                            </div>
                            <div className="f-row">
                                <input type="password" placeholder="Your password"/>
                            </div>
                            <div className="f-row">
                                <input type="password" placeholder="Retype password"/>
                            </div>

                            <div className="f-row bwrap">
                                <input type="submit" value="register"/>
                            </div>
                            <p>Already have an account yet? <a href="login.html">Log in.</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    );
};

export default Register;