import React from "react";
import "./css/Login.css";
const Login = () => {
    return (
            <section className="login">
                <div className="login__card">
                    <h2 className="login__title">User Login</h2>
                    <p className="login__text">Please enter your credentials to log in.</p>
                    <form className="login__form" onSubmit={(e) => e.preventDefault()}> 
                        <label className="login__label">
                            Username
                            <input className="login__input" type="text" name="username" placeholder="Enter your username" />
                        </label>
                        <label className="login__label">
                            Password
                            <input className="login__input" type="password" name="password" placeholder="Enter your password" />
                        </label>
                        <div className="login__actions">
                            <button className="login__button" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </section>
    );
}
export default Login;