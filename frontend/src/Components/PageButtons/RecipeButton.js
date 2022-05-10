import React from 'react';
import './RecipeButton.css'


function ReadRecipeBtn(){
    return(
        <button className='readRecipeBtn'>Read Recipe</button>
    )
}

function RecipeButton(props){
    return(
    <div className='recipeBtnContainer'> 
        <img className='recipeImgCover' src={props.imgurl} alt='Sample'></img>
        <div  className='recipeBtnTitle'>
            <h4>
                {props.title}
            </h4>
        </div>
        <div className='recipeBtnDescrip'>
            <p>
                {props.descrip}
            </p>
        </div>
        <div className='readRecipeContainer'>
            <ReadRecipeBtn/>
        </div>
            
    </div>
    )
    
}

export default RecipeButton;



