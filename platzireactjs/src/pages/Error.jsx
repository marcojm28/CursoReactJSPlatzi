import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/11233-505-error.json";
class Error extends React.Component {
  render(props) {
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
        <div className="row">
            <h3 className="col">
                ERROR: {this.props.error}
            </h3>
        </div>
        <div className="row">
            <div className="col">
                <Lottie options={defaultOptions} height={700} width={700} />
            </div>
        </div>
      </div>
    );
  }
}

export default Error;
