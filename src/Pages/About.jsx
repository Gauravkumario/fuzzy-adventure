import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-page-image"></div>
      <div className="about-page-text-content">
        <h2 className="textLevelTwo">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉).
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels
        </p>
      </div>
      <div className="about-page-text-content-1">
        <h3>Your destination is waiting. Your van is ready.</h3>
        <button className="explore-ourvans-btn">
          <Link to={`/Vans`}>Explore our vans</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
