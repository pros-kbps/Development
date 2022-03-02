
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/HomePage/Home';
import Prediction from './pages/PredictionPage/Prediction';
import Matches from './pages/Matches/Matches';
import './App.css';

function App() {
  return (
      <div>
          <Route path ="/Home">
              <Home/>
          </Route>
          <Route path ="/Start">
              <Start/>
          </Route>
          <Route path="/prediction">
              <Prediction/> 
          </Route> 
          <Route path ="/Matches">
              <Matches/>
          </Route>

      </div>

  );
}

export default App;
