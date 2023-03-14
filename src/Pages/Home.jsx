import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-page-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="find-your-van-btn">
        <Link to={`/Vans`}>Find Your Van</Link>
      </button>
    </div>
  );
};

export default Home;
