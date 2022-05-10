import React from "react";
import Navbar from "../../Components/NavBar/NavigationBar";
import {useState} from 'react';
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import  Delete  from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import { Button } from "@mui/material"; 
import { Send } from "@mui/icons-material";
import { Box } from "@mui/system";
import TheFooter from "../../Components/Footer/AFooter";
import './recipemaker.css';


function RecipeMaker(){
    const [recipeList,setRecipe] = useState([{procedure:''}]);
    const [ingredientList,setIngredients] = useState([
        {ingredientName:"",quantity:'',unitmeasure:''},
    ]);
    const handleChangeInput = (index,event) => {
        const values = [...ingredientList];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ingredients and Recipe', ingredientList,recipeList)
    }
    const handleAddFields = () => {
        setIngredients([...ingredientList, { ingredientName: '', quantity:'', unitmeasure:''}])
    }
    const handleRemoveFields = (index) => {
        const values = [...ingredientList]
        values.splice(index,1)
        setIngredients(values)
    }

    const handleProcedure = (index,event) => {
        const values = [...recipeList];
        values[index][event.target.name] = event.target.value;
        setRecipe(values);
    }

    const handleAddProcedure = () => {
        setRecipe([...recipeList, {procedure:''}])
    }

    const handleRemoveProcedure = (index) => {
        const values = [...recipeList]
        values.splice(index,1)
        setRecipe(values)
    }
    return(
        <div className="recipeContainer">
        <Navbar/>
        <div>
        <Box component='div' sx={{
            backgroundColor:'#e8917c',
            color: 'white',
            padding: '20px',
            m: '20px',
        }}>
            <h1>Ingredients</h1>
            <br></br>
            <form>
                    <Box sx={{
                        m:'5px',
                        p:'5px'
                    }}>
                    {ingredientList.map((ingredientList,index) =>(
                    <div key={index} className='ingredients-field'>
                    
                        <TextField
                            name='ingredientName'
                            label='Ingredient Name'
                            variant='filled'
                            value={ingredientList.ingredientName}
                            onChange={event => handleChangeInput(index,event)}
                        ></TextField>
                        <TextField
                            name='quantityName'
                            label='Quantity'
                            variant='filled'
                            value={ingredientList.quantity}
                            onChange={event => handleChangeInput(index,event)}
                        ></TextField>
                        <TextField
                            name='Unit'
                            label='Unit'
                            variant='filled'
                            value={ingredientList.unitmeasure}
                            onChange={event => handleChangeInput(index,event)}
                        ></TextField>
                        <IconButton 
                        onClick={()=>handleRemoveFields()}>
                            <Delete />
                        </IconButton>
                        <IconButton
                        onClick={()=>handleAddFields()}
                        >
                            <Add />
                        </IconButton>
                    </div>
                    ))}
                    </Box>

                    <h1>Procedures</h1>

                    {recipeList.map((recipeList,index) =>(
                    <div key={index} className='recipeField'>
                    
                    
                        <TextField
                            fullWidth
                            name='procedure'
                            label='Procedure'
                            variant='filled'
                            value={recipeList.procedure}
                            onChange={event => handleProcedure(index,event)}
                        ></TextField>
                        <IconButton 
                        onClick={()=>handleRemoveProcedure()}>
                            <Delete />
                        </IconButton>
                        <IconButton
                        onClick={()=>handleAddProcedure()}
                        >
                            <Add />
                        </IconButton>
                    </div>
                    ))}


                    <Button 
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    onClick={handleSubmit}
                    >Send<Send></Send></Button>
                    
                </form>
                </Box>
        </div>
        
                        
            

                    
            
        </div>
    );
}

export default RecipeMaker;