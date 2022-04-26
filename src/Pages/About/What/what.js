import React from 'react';
import './what.css';


export function What (props){
    return(
        <div className = 'what-container'>
            <div className = 'whatTitle'>
                <h1>
                    {props.title}
                </h1>
            </div>
            <div className = 'whatDesc'>
                <p>
                    {props.descrip}
                </p>
            </div>
        </div>
    )
};
