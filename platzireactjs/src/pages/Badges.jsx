import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Spinner from "react-bootstrap/Spinner";
import Loader from "../components/Loader";
import RickMortyList from "../components/RickMortyList";
import BadgesList from "../components/BadgesList";
import Error from "../pages/Error";
import PlatziLogo from "../images/PlatziConf.png";
import "../pages/styles/Badges.scss";
import Api from "../api";

function Badges() {

  const [nextPage,setNextPage] = useState(1);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState();
  const [data,setData] = useState([]);
  const [dataAPI,setDataAPI] = useState({results: [],info: []});
  const [intervalId,setIntervalID]=useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchCharacters = async () => {
    
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${nextPage}`
      );

      const dataCharacters = await response.json();

      setNextPage(nextPage + 1);
      setLoading(false);
      setLoading(false);
      setDataAPI({
        info: dataCharacters.info,
        results: dataCharacters.results
      })

    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    setErrorMessage(null);
    try {
      const dataBadges = await Api.badges.list();
      console.log(dataBadges);
      setLoading(false);
      setData(dataBadges);
    } catch (error) {
      
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  if(loading){
    return(
      <Loader></Loader>
    );
  }
    
    if(error){
      return <Error  error={errorMessage}></Error>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={PlatziLogo}
                alt="conf logo"
              ></img>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-success">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            
            {/* <RickMortyList characters={dataAPI.results}></RickMortyList> */}
            <BadgesList badges={data}></BadgesList>
          </div>
        </div>
        <div className="Badges__container">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary col"
                onClick={() => fetchCharacters()}
              >
                {loading && <Spinner animation="grow" size="lg" />}
                Load More
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  
}

export default Badges;
