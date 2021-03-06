import React, { Component } from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './main';
import Weather from './weather';
import About from './about';
import Examples from './examples';

//load foundation (esto es una mierda, pero es lo que hay, por ahora)
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!../styles/app.scss');

class App extends Component{
  render() {
    return(
      <Router history={hashHistory}>
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
