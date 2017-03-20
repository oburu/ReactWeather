import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
  onSearch(e){
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?loc=' + encodedLocation;
    }

  }

  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">weðə by JS</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={ (e) => this.onSearch(e) }>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather by city" ref="search" /></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav;
