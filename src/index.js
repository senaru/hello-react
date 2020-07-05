import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}){
    return <h1>{name}</h1>
}

const lakeList = [
    "Echo Lake",
    "Maud Lake",
    "Cascade Lake"
];

function App({lakes}){
    return(
        <ul>
            {lakes.map(lake =>(
                <li>{lake}</li>
            ))}
        </ul>
    );
}

ReactDOM.render(
  <App lakes = {lakeList}/>,
  document.getElementById('root')
);