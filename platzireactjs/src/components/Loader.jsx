import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/39011-loader-validator.json";
class Loader extends React.Component {
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
      <div className="container">
        <div className="row">
          <div className="col-lg align-self-center">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
