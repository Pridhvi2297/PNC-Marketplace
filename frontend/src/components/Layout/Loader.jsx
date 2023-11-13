import React, { useState, useEffect } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="w-full h-screen flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + "/Loader.gif"}
            alt="Loader"
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
