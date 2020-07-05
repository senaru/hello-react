import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GithubUser({ login }) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    if (data) {
        return (
            <div>
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={100} />
                <h3>Raw JSON</h3>
                <div>{JSON.stringify(data)}</div>
            </div >

        );
    }
    return null;
}

function App() {
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    useEffect(() => {
        console.log(`field 1: ${val}`);
    }, [val]);

    useEffect(() => {
        console.log(`field 2: ${val2}`);
    }, [val2]);

    return (
        <>
            <GithubUser login="senaru" />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

const [first, , best] = [
    "popcorn",
    "pretzels",
    "doritos"
]

console.log(first)
console.log(best)