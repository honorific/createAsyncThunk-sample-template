import React from 'react'
import './css/Main.css';

export default function Main(props) {
    return (
        <div id="main">
            {props.children}
        </div>
    )
}
