import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const [vanDetail, setVanDetail] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

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
      <div className="van-detail-container">
        {vanDetail ? (
          <div className="van-detail">
            <img className="vanImage" src={vanDetail.imageUrl} alt="van" />
            <i className={`van-type ${vanDetail.type} selected`}>
              {vanDetail.type}
            </i>
            <h2>{vanDetail.name}</h2>
            <p className="van-price-label-sign">
              <span className="van-price-label">${vanDetail.price}</span>/day
            </p>
            <p className="van-description">{vanDetail.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading.......</h2>
        )}
      </div>
    </>
  );
};

export default VanDetail;
