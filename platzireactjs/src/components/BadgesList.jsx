import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/BadgesList.scss";

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length == 0){
        return(
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-success btn-lg" to="/badges/new">create new badge</Link>
          </div>
        );
    }


    return (
      <ul className="list-unstyled">
        {this.props.badges?.map((item) => {
          return (
            <li key={item.id}>
              <div className="form-group card text-white bg-success">
                <div className="card-header">
                  {item.firstName} {item.lastName}
                </div>
                <div className="row card-body">
                  <div className="card__image col-3">
                    <img src={item.avatarUrl} alt="avatar"></img>
                  </div>
                  <div className="form-group col-9">
                    <div class="row">
                      <div className="col-12">Email: {item.email}</div>
                    </div>
                    <div className="row">
                      <div className="col">Title: {item.jobTitle}</div>
                    </div>
                    <div className="row">
                      <div className="twitter__info col">
                        <div className="row">
                          <div className="twitter__text col-10">
                            Twitter: {item.twitter}
                          </div>
                            {/* <img src={TwitterIcon} className="img-fluid col-2" alt="twitter icon"></img> */}
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
