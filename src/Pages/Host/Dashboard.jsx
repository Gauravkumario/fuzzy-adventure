import React, { Suspense } from "react";
import { Link, Outlet, defer, Await, useLoaderData } from "react-router-dom";
import Star from "../../assets/images/Star.svg";
import { getHostVans } from "../../api";

export function loader() {
  return defer({ vans: getHostVans() });
}

const Dashboard = (vans) => {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div key={van.id} className="host-dashboard-vans-list">
        <div key={van.id}>
          <div className="host-van-single">
            <img
              className="listed-van-image"
              src={van.imageUrl}
              alt={`Phot of ${van.name}`}
            />
            <div className="host-van-info">
              <h3 className="hosted-van-name">{van.name}</h3>
              <p className="hosted-van-price">${van.price}/ day</p>
            </div>
          </div>
        </div>
        <div>
          <Link to={"vans/" + van.id} className="host-right-tag">
            Edit
          </Link>
        </div>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      <div className="dasboard-section">
        <div className="host-vans-dashboard">
          <div className="host-dashboard-welcome-section">
            <div className="host-dashboard-welcome-child">
              <h1 className="host-welcome-text">Welcome!</h1>
              <h2 className="host-welcome-income-summary">
                Income last <span>30 days</span>
              </h2>
              <h2 className="host-welcome-price">$2,260</h2>
            </div>
            <span>
              <Link to="./income" className="host-right-tag">
                Details
              </Link>
            </span>
          </div>
          <div className="host-dashboard-review-section">
            <span className="host-dashboard-review-child">
              <span className="host-dashboard-review-text">Review score</span>
              <img src={Star} alt="star" className="rating-star" />{" "}
              <span className="rating-by-user">5.0</span>
              /5
            </span>
            <span>
              <Link to="./reviews" className="host-right-tag">
                Details
              </Link>
            </span>
          </div>
          <div className="host-dashboard-van-header-section">
            <span className="host-dashboard-van-text">Your Listed vans</span>
            <span>
              <Link to="./vans" className="host-right-tag">
                View all
              </Link>
            </span>
          </div>
          <div>
            <Suspense fallback={<h2>Loading Vans</h2>}>
              <Await resolve={loaderData.vans}>{renderVanElements}</Await>
            </Suspense>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
