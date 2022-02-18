import './App.css';
import {Route} from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/HomePage/Home'

function App() {
  return (
      <div>
          <Route path ="/Home">
              <Home/>
          </Route>
          <Route path ="/Start">
              <Start/>
          </Route>
      </div>

  );
}

export default App;
