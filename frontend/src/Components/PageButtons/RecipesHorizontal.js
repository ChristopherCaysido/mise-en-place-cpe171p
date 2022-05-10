import React from 'react';
import RecipeButton from './RecipeButton';
import './flexbox.css'

function limitChar120(description){
    return description.substring(0,120)+'... ';
}

const ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae fermentum dolor, ut luctus enim. Suspendisse pharetra neque nunc,';

function RecipeRow(){
    return(
        <div className='flexbox-container'>
            <RecipeButton title='Sample Recipe' descrip={limitChar120(ipsumText)} imgurl='https://hips.hearstapps.com/vidthumb/images/190130-calzone-horizontal-2-1549482540.png'/>
            <RecipeButton title='Sample Recipe' descrip={limitChar120(ipsumText)} imgurl='https://hips.hearstapps.com/vidthumb/images/190130-calzone-horizontal-2-1549482540.png'/>
            <RecipeButton title='Sample Recipe' descrip={limitChar120(ipsumText)} imgurl='https://hips.hearstapps.com/vidthumb/images/190130-calzone-horizontal-2-1549482540.png'/>
        </div>
    );
}

export default RecipeRow;