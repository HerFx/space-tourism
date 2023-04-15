import './App.css';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import Navbar from './components/Navbar';

import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/destination' exact element={<Destination/>}/>
      <Route path='/crew' exact element={<Crew/>}/>
      <Route path='/technology' exact element={<Technology/>}/>
      
    </Routes>
   </Router>
    </div>
  );
}

export default App;
