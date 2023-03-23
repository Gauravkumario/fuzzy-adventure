import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div>Error: {error.message}</div>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};

export default Error;
