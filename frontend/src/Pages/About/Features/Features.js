import React from 'react';
import '../Features/FeatureButton.css';

function ReadMoreButton (){
    return(
        <button className = 'Readmorebutton'>Read More</button>
    )
};

function Features(props){
    return(
        <div className = 'feature-container'>
        <img className = 'featureImg' src={props.imgurl} alt='Sample Images'></img>
    
        <div  className='featureTitle'>
            <h3>
                {props.title}
            </h3>
            </div>
    <div className = 'featureDesc'>
        <p>
            {props.descrip}
        </p>
    </div>

    <div className = 'readmore-container'>
        <ReadMoreButton/>
    </div>
    </div>
    )
};
export default Features;