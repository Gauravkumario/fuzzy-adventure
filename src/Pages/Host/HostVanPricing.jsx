import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${currentVan.price}
      <span className="price-per-day-text">/ day</span>
    </h3>
  );
};

export default HostVanPricing;
