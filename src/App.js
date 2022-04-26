import './App.css';
import HomePage from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import RecipeMaker from './Pages/RecipeMaker/RecipeMaker';
import AboutPage from './Pages/About/About';
import Login from './Pages/Login/Login';
import TheFooter from './Components/AFooter';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="Container">
        <Routes>
          <Route path='/' element={<HomePage/>}/>  
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/createRecipe' element={<RecipeMaker/>}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
    </div>
    
  );
}

export default App;