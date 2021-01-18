import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import PlatziLogo from "../images/Subscriber-pana.png";
function BadgeDetail(props) {
  return (
    <React.Fragment>
      <div className="BadgeNewHero container-fluid">
        <div className="row">
          <div className="col">
            <div className="row justify-content-center align-items-center">
              <div className="col-3">
                <img className="img-fluid" src={PlatziLogo} alt="logo"></img>
              </div>
              <div className="col-5">
                <h1 className="text-light">
                  {props.badge.firstName} {props.badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName || "FIRST_NAME"}
              lastName={props.badge.lastName || "LAST_NAME"}
              title={props.badge.title || "TITLE"}
              email={props.badge.email || "EMAIL"}
              twitter={props.badge.twitter || "TWITTER"}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div className="row">
              <div className="col-3">
                <Link
                  className="btn btn-primary btn-lg col-12"
                  to={`/badges/${props.badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div className="col-3">
                <button onClick={props.onOpenModal} className="btn btn-danger btn-lg col-12">Delete</button>
                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} >
                </DeleteBadgeModal>

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetail;
