import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../pages/styles/BadgeNew.scss";
import PlatziLogo from "../images/Subscriber-pana.png";
class BadgeNew extends React.Component {
  state = {
    form: {
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <div className="BadgeNewHero">
              <div className="row">
                <div className="col-3">
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.title}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-5">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              ></BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
