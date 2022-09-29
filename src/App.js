import './Assets/Style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/Error';
import Services from './Pages/Services';

function App(props) { 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home database={props.database} textes={props.data}/>}/>
        <Route path='/Home' element={<Home database={props.database} textes={props.data}/>}/>
        <Route path='/Services' element={<Services database={props.database} textes={props.data}/>}/>
        <Route path='*' element={<ErrorPage />}/> 
      </Routes>
    </div>

  );
}

export default App;
