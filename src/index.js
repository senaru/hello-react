import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
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