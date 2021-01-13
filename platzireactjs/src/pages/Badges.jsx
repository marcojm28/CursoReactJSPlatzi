import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Spinner from "react-bootstrap/Spinner";
import PageLoading from "../components/PageLoading";
import RickMortyList from "../components/RickMortyList";
import BadgesList from "../components/BadgesList";
import Error from "../pages/Error";
import PlatziLogo from "../images/PlatziConf.png";
import "../pages/styles/Badges.scss";
import Api from "../api";
// import BadgesList from "../components/BadgesList";
class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: false,
      errorMessage: null,
      data: [],
      dataAPI: {
        results: [],
      },
    };
  }

  componentDidMount() {
    
    // setTimeout(() => {
    //   this.fetchCharacters();
    // },3000)
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearTimeout(this.timeoutBadgesId);
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );

      const data = await response.json();

      this.setState({
        nextPage: this.state.nextPage + 1,
        loading: false,
        dataAPI: {
          info: data.info,
          // results: [].concat(this.state.dataAPI.results, data.results),
          results: data.results,
        },
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        errorMessage: error,
      });
    }
  };

  fetchData = async () => {
    this.setState({ loading: true, error: false, errorMessage:null });

    try {
      const data = await Api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      
      this.setState({ loading: false, errorMessage:error.message,error: true });
    }
  };

  render() {
    if(this.state.error){
      return <Error  error={this.state.errorMessage}></Error>
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

        {/* <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-success">
              New Badge
            </Link>
          </div>
        </div> */}

        <div className="Badges__list">
          <div className="Badges__container">
            {this.state.loading && 
              <PageLoading></PageLoading>
              // <Error  error={this.state.error}/>
            }
            {/* <RickMortyList characters={this.state.dataAPI.results}></RickMortyList> */}
            <BadgesList badges={this.state.data}></BadgesList>
          </div>
        </div>
        <div className="Badges__container">
          <div className="row">
            <div className="col">
              {/* <button
                className="btn btn-primary col"
                onClick={() => this.fetchCharacters()}
              >
                {this.state.loading && <Spinner animation="grow" size="lg" />}
                Load More
              </button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
