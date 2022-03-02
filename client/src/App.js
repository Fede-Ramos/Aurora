import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Routes>
               <Route exact path = '/' element= {<LandingPage/>}/>
               <Route path = '/home' element= {<Home/>}/>
               <Route path = '/home/:id' element= {<Detail/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;