import './App.css';
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import RecipeMaker from './Pages/RecipeMaker/RecipeMaker';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="Container">
        <Routes>
          <Route path='/' element={<HomePage/>}/>  
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/createRecipe' element={<RecipeMaker/>}/>
        </Routes>
        
    </div>
  );
}

export default App;