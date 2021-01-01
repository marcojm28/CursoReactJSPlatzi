import React from 'react';

class BadgeForm extends React.Component {
    
    handleClick = e =>{
        console.log(this.props.formValues);
    };
    
    render(){
        return (
          <div>
            <h1>Nuevo Asistente</h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="">Nombres</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={this.props.formValues.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Apellidos</label>
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
                <label htmlFor="">Título</label>
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