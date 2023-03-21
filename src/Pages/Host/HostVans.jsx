import React, { Suspense } from "react";
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
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
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      {" "}
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <Suspense fallback={<h2>Loading Vans</h2>}>
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
}
