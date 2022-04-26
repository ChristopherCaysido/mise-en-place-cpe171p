import React from 'react';
import './AuthorContainer.css';


function Authors(props){
    return(
        <div className = 'authorflexbox-container'>
          <div className = 'authorTitle'>
            <h2>
                {props.title}
            </h2>
        </div>
        
        <img className='authorImg' src={props.imgurl}></img>

        </div>

    )
}
export default Authors;

