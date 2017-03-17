import React, { Component } from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from './main';
import Weather from './weather';
import About from './about';
import Examples from './examples';

class App extends Component{
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
        </Route>
      </Router>
    );
  }
}

export default App;
