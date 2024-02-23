import React from "react";
import Lottie from "react-lottie";
import nodata from "../assets/nodata.json";

function NoResult() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: nodata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={300} width={300} />
      <h1
        style={{
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        There is no such pokemon
      </h1>
    </div>
  );
}

export default NoResult;
