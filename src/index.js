import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    });

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "checked" : "not checked"}
        </>
    )
}

ReactDOM.render(
    <CheckBox />,
    document.getElementById('root')
);

const [first, , best] = [
    "popcorn",
    "pretzels",
    "doritos"
]

console.log(first)
console.log(best)