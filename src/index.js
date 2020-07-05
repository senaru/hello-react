import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({ name }) {
    return <h1>{name}</h1>
}

const lakeList = [
    { id: "1", name: "Echo", trailhead: "Echo" },
    { id: "1", name: "Maud", trailhead: "Wrights" },
    { id: "1", name: "Cascade", trailhead: "Bayview" }
];

function App({ lakes }) {
    return (
        <div>
            {lakes.map(lake => (
                <div>
                    <h2>{lake.name}</h2>
                    <p>Accessed by {lake.trailhead}</p>
                </div>
            ))}
        </div>
    );
}

ReactDOM.render(
    <App lakes={lakeList} />,
    document.getElementById('root')
);