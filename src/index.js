import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

function Index(){
return <div className="container-fluid h-100 w-100 p-0">
        <div className="row h-100 w-100 m-0">
          <Header></Header>
        </div>
      </div>
}

ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
