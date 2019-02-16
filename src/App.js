import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Nav from './nav/nav';
import Characters from './characters/characters'
import Films from './films/films';
import Starships from './starships/starships';
import Vehicles from './vehicles/vehicles';
import Species from './species/species';
import Planets from './planets/planets';

import Logo from './images/Swlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Star-Wars-App">
        <header>
          <Link to='/'>
            <img src={Logo} alt="star-wars-logo"/>
          </Link>  
        </header>
        <div role="main" className="main-section">
          <div className="nav-section">
          {['/', '/people', '/films', '/starships', '/vehicles', '/species', '/planets'].map(path =>
            <Route
              exact
              key={path}
              path={path}
              component={Nav}
            />
          )}
          </div>
          <div className="search-section">
              <Route 
              path='/people'
              component={Characters}
              />
              <Route 
              path='/films'
              component={Films}
              />
              <Route 
              path='/starships'
              component={Starships}
              />
              <Route 
              path='/vehicles'
              component={Vehicles}
              />
              <Route 
              path='/planets'
              component={Planets}
              />
              <Route 
              path='/species'
              component={Species}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
