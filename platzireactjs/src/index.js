import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';

ReactDOM.render(<App/>,document.getElementById('app')
);

//<Badge firstName="Pedro" lastName="Carpio" jobTitle="Desarrollador back end"/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
