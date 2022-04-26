import React from 'react'
import RecipeRow from '../../PageButtons/RecipesHorizontal';
import Slider from './Slider/Slider';
import Navbar from '../../NavBar/NavigationBar';
import Divider from '../../Divider/Divider';



function HomePage(){
    return(
        <div className=''>
            <Navbar />
            <Slider />
            <Divider dividerText='Read Recipes from Other People'/>
            <RecipeRow />
        </div>
    )
}

export default HomePage;