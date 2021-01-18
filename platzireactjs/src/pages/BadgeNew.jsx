import React, { useState, useEffect } from 'react';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Loader from "../components/Loader";
import Error from "../pages/Error";
import "../pages/styles/BadgeNew.scss";
import PlatziLogo from "../images/Subscriber-pana.png";
import Api from "../api"
function BadgeNew(props)  {

  const [form,setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        twitter: "",
  });

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState();

  useEffect(() => {

  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e =>{
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    try{
        await Api.badges.create(form);
        setLoading(false);
        setError(false);
        props.history.push('/badges');
    }catch(error){
      // this.setState({ loading: false, error: false, errorMessage:error.message});
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
        <div className="row">
          <div className="col">
            <div className="BadgeNewHero">
              <div className="row justify-content-center">
                <div className="col-3 ">
                  <img className="img-fluid" src={PlatziLogo} alt="logo"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerBadgeNew container">
          <div className="row">
            <div className="col-7">
              <Badge
                firstName={form.firstName || "FIRST_NAME"}
                lastName={form.lastName || "LAST_NAME"}
                title={form.title || "TITLE"}
                email={form.email || "EMAIL"}
                twitter={form.twitter || "TWITTER"}
              />
            </div>
            <div className="col-5">
            <h1>New Attendant</h1>
              <BadgeForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                formValues={form}
              ></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  
}

export default BadgeNew;
