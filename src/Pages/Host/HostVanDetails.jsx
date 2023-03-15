import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [currentVan, setCurrentVan] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="back-to-parent-page">
        <Link to=".." relative="path" className="back-button">
          &larr; <span className="back-to-parent-text">Back to all vans</span>
        </Link>
      </div>
      <div></div>
      <div className="hosted-van-detailed-page">
        <img src={currentVan.imageUrl} width={150} alt="popo" />
        <div className="hosted-van-short-info">
          <p className={`hosted-van-${currentVan.type}`}>{currentVan.type}</p>
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
    </>
  );
};

export default HostVanDetails;
