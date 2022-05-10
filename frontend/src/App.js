import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import RecipeMaker from './Pages/RecipeMaker/RecipeMaker';
import AboutPage from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
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
          <Route path='/Register' element={<Register />}/>
        </Routes>
        <ToastContainer/>
    </div>
    
  );
}

export default App