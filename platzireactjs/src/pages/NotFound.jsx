import React from 'react';
import NotFoundImage from '../images/not-found.png';
import './styles/NotFound.scss';
function NotFound(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="container__notfound col-12">
          <img className="img-fluid" src={NotFoundImage} alt="not found"></img>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
