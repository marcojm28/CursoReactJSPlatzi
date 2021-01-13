import React from "react";

class RickMortyList extends React.Component {
    
    render() {
      return (
        <ul className="list-unstyled">
          {this.props.characters?.map((item) => {
            return (
              <li key={item.id}>
                <div className="form-group card text-white bg-success">
                  <div className="card-header">
                    {item.name} 
                  </div>
                  <div className="row card-body">
                    <div className="card__image col-3">
                      <img className="img-fluid" src={item.image} alt="avatar"></img>
                    </div>
                    <div className="form-group col-9">
                      <div class="row">
                        <div className="col-12">Species: {item.species}</div>
                      </div>
                      <div className="row">
                        <div className="col">Type: {item.type}</div>
                      </div>
                      <div className="row">
                        <div className="twitter__info col">
                          <div className="row">
                            <div className="col">
                              Gender: {item.gender}
                            </div>
                            
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
  
  export default RickMortyList;
  