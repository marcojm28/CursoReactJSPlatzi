import React from 'react';

class BadgeForm extends React.Component {
    
    handleClick = e =>{
        
    };
    
    render(){
        return (
          <div>
            
            <form onSubmit={this.props.onSubmit}>
              <div className="form-group">
                <label htmlFor="">First name</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={this.props.formValues.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Last name</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={this.props.formValues.lastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.props.formValues.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Job Title</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="title"
                  value={this.props.formValues.title}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Twitter</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="twitter"
                  value={this.props.formValues.twitter}
                />
              </div>

              <button
                onClick={this.handleClick}
                className="btn btn-success"
              >
                Save
              </button>
            </form>
          </div>
        );
    }
}

export default BadgeForm;