import React from "react";
import Navbar from "../../NavBar/NavigationBar";
import RecipeButton from "../../PageButtons/RecipeButton";
import { mysavedrecipedata } from "./dashboarddata";
import { myrecipedata } from "./dashboarddata";
import { Link } from "react-router-dom";
import './dashboard.css'
import TheFooter from "../../Components/AFooter";

function Dashboard(){

    return(
        <div className="dashboardContainer">
            <Navbar />
            <div className="recipeContainer">
                <h1 className="titleHeader">
                    My Recipes
                </h1>
                <hr></hr>
                <div className="recipes">
                {myrecipedata.map((button) => {
                        return(
                            <RecipeButton key={button.id} title={button.title} descrip={button.descrip} imgurl={button.imgurl}/>
                        )
                        
                    })}
                <div className="addRecipe">
                <Link to='/createRecipe'>
                <span>
                    <img className='addBtn' alt='add' src='https://www.freeiconspng.com/thumbs/plus-icon/plus-sign-icon-31.png'></img>
                </span>
                </Link>
                </div>
                </div>
            </div>
            <div className="recipeContainer">
                <h1 className="titleHeader">
                    My Saved Recipes
                </h1>
                <hr></hr>
                <div className="recipes">
                    {mysavedrecipedata.map((button) => {
                        return(
                            <RecipeButton key={button.id} title={button.title} descrip={button.descrip} imgurl={button.imgurl}/>
                        )
                    })}</div>
            </div>
            <TheFooter/>
        </div>
    )
}

export default Dashboard;