import React from "react";
import Navbar from "../../NavBar/NavigationBar";
import {useState} from 'react';

export default function RecipeMaker(){
    const [recipeList,setRecipe] = useState([{Ingredient:""}]);
    const [ingredientList,setIngredients] = useState();
    return(
        <div>
        <Navbar/>
            <form className='recipe'>
                <div className='ingredients-form'>
                    <label htmlFor="ingredients">Ingredient(s)</label>
                    {ingredientList.map()}
                    <div className='ingredients-field'>
                        <table>
                            <tr>
                                <td>Name of Ingredient</td>
                                <td>Quantity</td>
                                <td>Unit of Measure</td>
                            </tr>
                            <tr>

                            </tr>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    );
}