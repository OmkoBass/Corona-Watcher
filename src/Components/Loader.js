import React from "react";

import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="loading" data-testid="loader">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
