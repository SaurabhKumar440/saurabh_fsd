import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Login from "./components/login.jsx";
import "./App.css";

const App = () => {
    return (
        <Router>
                    <header className="app-container">
                        <nav className="site-nav">
                            <div className="site-title">My App</div>
                            <div className="site-links">
                                <Link className="btn btn--ghost" to="/register">Register</Link>
                                <Link className="btn btn--primary" to="/login">Login</Link>
                            </div>
                        </nav>
                    </header>
            <Routes>
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;