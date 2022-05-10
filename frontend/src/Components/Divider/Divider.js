import React from "react";
import './divider.css';

function Divider(props){
    return(
        <div className='divider-container'>
            <h1 className='divider-text'>
                {props.dividerText}
            </h1>
        </div>
    );
}

export default Divider;