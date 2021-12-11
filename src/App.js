import React from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      


      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/about/:id' exact component={About}/>
      </Router>
    </div>
  );
}

export default App;
