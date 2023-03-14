import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img className="vanImage" src={van.imageUrl} alt="van" />
        <div className="van-info">
          <div>
            <h3>{van.name}</h3>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
          <div>
            <p className="van-price-label">
              ${van.price}
              <br />
              <span className="van-price-label-sign">/day</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <h1 className="van-list-header-text">Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </>
  );
}
