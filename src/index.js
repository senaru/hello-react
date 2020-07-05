import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({ name }) {
    return (
        <>
            <h1>Visit {name}</h1>
        </>);
}

function SkiResort({ name }) {
    return (
        <>
            <h1>Visit {name}!</h1>
        </>);
}

function App(props) {
    if (props.season == "summer") {
        return <Lake name="Jenny Lake" />;
    } else if (props.season == "winter") {
        return <SkiResort name="Jackson Hole Mountain Resort" />;
    }
}

ReactDOM.render(
    <App season="summer" />,
    document.getElementById('root')
);

const [first, , best] = [
    "popcorn",
    "pretzels",
    "doritos"
]

console.log(first)
console.log(best)