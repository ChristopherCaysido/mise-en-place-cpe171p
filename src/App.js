import './App.css';
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="Container">
        <Routes>
          <Route path='/' element={<HomePage/>}/>  
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        
    </div>
  );
}

export default App;