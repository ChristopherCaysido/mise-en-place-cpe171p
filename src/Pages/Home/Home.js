import React from 'react'
import RecipeRow from '../../PageButtons/RecipesHorizontal';
import Slider from './Slider/Slider';
import Navbar from '../../NavBar/NavigationBar';
import Divider from '../../Divider/Divider';
import TheFooter from '../../Components/AFooter';
import './Home.css'

function HomePage(){
    return(
        <div className='homeContainer'>
            <Navbar />
            <Slider />
            <Divider dividerText='Read Recipes from Other People'/>
            <RecipeRow />
            <div className='pageContainer'>
          <div className='content-wrap'>
          </div>
          <div>
            <TheFooter/>
          </div>
        </div>
        </div>
        
    )
}

export default HomePage;