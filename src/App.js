import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Journal from'./Journal';
import Home from './Home';

class App extends Component {
  render()
  {  
  return (
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/journal" component={Journal} />                         
            </Switch>
          </Router>
          
        </div>
      );
  }
}

export default App;
