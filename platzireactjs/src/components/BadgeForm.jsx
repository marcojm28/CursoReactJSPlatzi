import React from 'react';

class BadgeForm extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        twitter: "",
      };

    handleChange = (e) =>{

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = e =>{
        console.log(this.state);
    };
    
    render(){
        return (
          <div>
            <h1>Nuevo Asistente</h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="">Nombres</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Apellidos</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Título</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="title"
                  value={this.state.title}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Twitter</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="twitter"
                  value={this.state.twitter}
                />
              </div>

              <button
                type="button"
                onClick={this.handleClick}
                className="btn btn-success"
              >
                Guardar
              </button>
            </form>
          </div>
        );
    }
}

export default BadgeForm;