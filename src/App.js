import './App.css';
import Slider from './Slider/Slider.js';
import RecipeRow from './PageButtons/RecipesHorizontal.js';
import HomePage from './Pages/Home';
import {Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="Container">
        <Route exact to='/' component={HomePage}/>
        
        <Slider />
        <RecipeRow />      
    </div>
  );
}

export default App;