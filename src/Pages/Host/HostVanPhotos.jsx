import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="hosted-photo-of-vans">
      <img src={currentVan.imageUrl} alt="van" />
    </div>
  );
};

export default HostVanPhotos;
