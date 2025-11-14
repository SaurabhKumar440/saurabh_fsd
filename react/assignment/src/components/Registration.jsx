import React from "react";  
import "./css/Registration.css";

const Registration = () => {
    return (
            <section className="registration">
                <div className="registration__card">
                    <h2 className="registration__title">User Registration</h2>
                    <p className="registration__text">Please fill in the form below to create an account.</p>
                    <form className="registration__form" onSubmit={(e) => e.preventDefault()}>
                        <label className="registration__label">
                            Username
                            <input className="registration__input" type="text" name="username" placeholder="Choose a username" />
                        </label>
                        <label className="registration__label">
                            Email
                            <input className="registration__input" type="email" name="email" placeholder="enter your email" />
                        </label>
                        <label className="registration__label">
                            Password
                            <input className="registration__input" type="password" name="password" placeholder="Create a password" />
                        </label>
                        <div style={{display:'flex', justifyContent:'flex-end'}}>
                            <button className="registration__button" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </section>
    );
}
export default Registration;