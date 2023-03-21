import React, { Suspense } from "react";
import {
  useLoaderData,
  defer,
  Link,
  Outlet,
  NavLink,
  Await,
} from "react-router-dom";
import { getHostVans } from "../../api";

export function loader({ params }) {
  return defer({ vans: getHostVans(params.id) });
}

const HostVanDetails = () => {
  const loaderData = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <div className="back-to-parent-page">
        <Link to=".." relative="path" className="back-button">
          &larr; <span className="back-to-parent-text">Back to all vans</span>
        </Link>
      </div>
      <div></div>
      <Suspense fallback={<h2>Loading</h2>}>
        <Await resolve={loaderData.vans}>
          {(currentVan) => (
            <div>
              <div className="hosted-van-detailed-page">
                <img src={currentVan.imageUrl} width={150} alt="popo" />
                <div className="hosted-van-short-info">
                  <p className={`hosted-van-${currentVan.type}`}>
                    {currentVan.type}
                  </p>
                  <h2>{currentVan.name}</h2>
                  <p className="hosted-van-price">${currentVan.price} /day</p>
                </div>
              </div>
              <nav className="host-van-detail-nav">
                <NavLink
                  to="."
                  end
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Photos
                </NavLink>
              </nav>
              <Outlet context={{ currentVan }} />
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default HostVanDetails;
