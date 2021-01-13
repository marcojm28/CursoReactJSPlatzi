import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/20957-skeleton-loading-card-landscape.json";
class PageLoading extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="Uncontrolled">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    );
  }
}

export default PageLoading;
