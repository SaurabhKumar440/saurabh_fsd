import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <h2 className="home__title">Welcome to the Home Page</h2>
        <p className="home__lead">This is the home page of our React Router demo application.</p>
        <div className="home__card">
          <h3>Quick Start</h3>
          <p>Use the navigation links above to visit About and Contact pages.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;