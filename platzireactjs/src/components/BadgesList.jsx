import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "../components/styles/BadgesList.scss";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="row">
          <div className="col">
            <h3>No badges were found</h3>
            <Link className="btn btn-success btn-lg" to="/badges/new">
              create new badge
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        {this.props.badges?.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${item.id}`}>
              <div className="form-group card text-white bg-success">
                <div className="card-header">
                  {item.firstName} {item.lastName}
                </div>
                <div className="row card-body">
                  <div className="card__image col-3">
                      <Gravatar email={item.email}></Gravatar>
                  </div>
                  <div className="form-group col-9">
                    <div class="row">
                      <div className="col-12">Email: {item.email}</div>
                    </div>
                    <div className="row">
                      <div className="col">Title: {item.title}</div>
                    </div>
                    <div className="row">
                      <div className="twitter__info col">
                        <div className="row">
                          <div className="twitter__text col-10">
                            Twitter: {item.twitter}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
