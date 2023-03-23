import React, { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return defer({ van: getVans(params.id) });
}

const VanDetail = () => {
  const location = useLocation();
  const loaderData = useLoaderData();
  // const [van, setVan] = React.useState(null);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <>
      <div className="back-to-parent-page">
        <Link to={`..${search}`} relative="path" className="back-button">
          &larr;{" "}
          <span className="back-to-parent-text">Back to {type} vans</span>
        </Link>
      </div>
      <Suspense
        fallback={<h2 style={{ textAlign: "center" }}>loading vans detail</h2>}
      >
        <Await resolve={loaderData.van}>
          {(van) => (
            <div className="van-detail-container">
              <div className="van-detail">
                <img className="vanImage" src={van.imageUrl} alt="van" />
                <br />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price-label-sign">
                  <span className="van-price-label">${van.price}</span>
                  /day
                </p>
                <p className="van-description">{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default VanDetail;
