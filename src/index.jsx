import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import My from './My';
import Projekt from './Projekt';
import Poketo from './Poketo';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Projekt</Link>
          </li>
          <li>
            <Link to="/o-nas">My</Link>
          </li>
          <li>
            <Link to="/o-poketu">Poketo</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/o-nas">
          <My />
        </Route>
        <Route path="/o-poketu">
          <Poketo />
        </Route>
        <Route path="/">
          <Projekt />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
