import React from 'react';
import './css/Card.css';

export default function Card(props) {
    let {theposter , title} = props;
    //console.log(props)
    return (
        <div className="Card">
            {props.children}
            <a href="#">
                <img src={theposter} />
                <p>{title}</p>
            </a>
        </div>
    )
}
