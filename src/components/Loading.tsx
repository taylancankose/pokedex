import Lottie from "react-lottie";
import loading from "../assets/loading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        height: "82vh",
        overflowY: "hidden",
        marginTop: 24,
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}

export default Loading;
