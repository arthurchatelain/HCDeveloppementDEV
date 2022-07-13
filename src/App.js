import './Assets/Style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='*' element={<Error />}/> 
      </Routes>
    </div>

  );
}

export default App;
