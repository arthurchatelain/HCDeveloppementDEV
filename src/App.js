import './Assets/Style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/Error';
import Services from './Pages/Services';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='*' element={<ErrorPage />}/> 
      </Routes>
    </div>

  );
}

export default App;
