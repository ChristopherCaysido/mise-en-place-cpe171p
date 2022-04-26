import React from "react";
import Navbar from "../../NavBar/NavigationBar";
import {useState} from 'react';
import { Container, makeStyles } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import  Delete  from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import { Button } from "@mui/material"; 
import { Send } from "@mui/icons-material";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme)=>({
    root: {
        borderRadius: 12,
        backgroundColor: 'blue';
    },
    button: {
        margin:theme.spacing(1),
    }
}))



function RecipeMaker(){
    const classes = useStyles()
    const [recipeList,setRecipe] = useState();
    const [ingredientList,setIngredients] = useState([
        {Ingredient:"",Quantity:'',Unit:''},
    ]);
    return(
        <div>
        <Navbar/>
        <div className='ingredients-form'>
            <h1>Ingredients</h1>
            <br></br>
            <form className='recipe'>
                    {ingredientList.map((singleIngredient,index) =>(
                    <div key={index} className='ingredients-field'>
                    
                        <TextField
                            name='ingredientName'
                            label='Ingredient Name'
                            variant='filled'
                            value={ingredientList.ingredientName}
                        ></TextField>
                        <TextField
                            name='quantityName'
                            label='Quantity'
                            variant='filled'
                            value={ingredientList.quantity}
                        ></TextField>
                        <TextField
                            name='Unit'
                            label='Unit'
                            variant='filled'
                            value={ingredientList.unitmeasure}
                        ></TextField>
                        <IconButton aria-label='delete'>
                            <Delete />
                        </IconButton>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </div>
                    ))}
                    <Button variant='contained' color='primary' type='submit'>Send<Send></Send></Button>
                    
                </form>
                </div>
            
            

                    
            
        </div>
    );
}

export default RecipeMaker;