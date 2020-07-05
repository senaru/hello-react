import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library,message,num}){
    return(
        <div>
            <h1>Welcome to {library}</h1>
            <p>Let's build something cool.</p>
            <p>{message}</p>
            <p>{num} Props Total</p>
        </div>
    );
}

ReactDOM.render(
  <Hello library="React" message="Have Fun!" num={3}/>,
  document.getElementById('root')
);