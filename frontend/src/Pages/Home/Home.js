import React from 'react'
import RecipeRow from '../../Components/PageButtons/RecipesHorizontal';
import Slider from './Slider/Slider';
import Navbar from '../../Components/NavBar/NavigationBar';
import Divider from '../../Components/Divider/Divider';
import TheFooter from '../../Components/Footer/AFooter';
import { useState } from 'react';
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