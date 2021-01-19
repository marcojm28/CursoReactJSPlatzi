import React, { useState,useMemo } from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "../components/styles/BadgesList.scss";

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  
  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label>Filter Badge</label>
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>No badges were found</h3>
            <Link className="btn btn-success btn-lg" to="/badges/new">
              Create new badge
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Filter Badge</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <Link to="/badges/new" className="btn btn-success">
              New Badge
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredBadges?.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${item.id}`}
              >
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
    </React.Fragment>
  );
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

export default BadgesList;
