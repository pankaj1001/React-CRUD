import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="#" className="navbar-brand"><h4>React Express App</h4></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><Link to={'/'} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
            <li className="nav-item"><Link to={'/edit/:id'} className="nav-link">Edit</Link></li>
            <li className="nav-item"><Link to={'/index'} className="nav-link">Index</Link></li>
          </ul>
          </div>
          </nav>
          <Switch>
            <Route exact path='/create' component={CreateComponent}></Route>
            <Route exact path='/edit/:id' component={EditComponent}></Route>
            <Route exact path='/index' component={IndexComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
