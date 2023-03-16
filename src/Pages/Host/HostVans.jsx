import React from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
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
    </Link>
  ));

  return (
    <>
      {" "}
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          {vans.length > 0 ? (
            <section>{hostVansEls}</section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default HostVans;
