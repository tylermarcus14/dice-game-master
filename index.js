import React, { Component, PropTypes }      from 'react';
import ReactDOM, { render }                 from 'react-dom';
import classNames                           from 'classnames';
import { Router, Route, Link, IndexRoute }  from 'react-router';

import './polyfills/classlist';

import Header     from './components/Header.jsx';
import Home       from './components/Home.jsx';
import Shuffle    from './components/1_Shuffle.jsx';
import Square     from './components/2_Square.jsx';
import Scrabble   from './components/3_Scrabble.jsx';
import Laboratory from './components/4_Laboratory.jsx';
import Footer     from './components/Footer.jsx';

import './scss/main.scss';


class App extends Component {
  availablePaths() { return this.props.route.childRoutes.map( route => route.path )}
  currentPath() { return this.props.location.pathname.replace(/^\//, '') }

  renderHeader() {
    // Skip the header on the index route
    if ( this.currentPath() ) {
      return <Header paths={this.availablePaths()} path={this.currentPath()} />
    }
  }
  render() {
    return (
      <div className="app">
        { this.renderHeader() }
        <section id="main-content">
          { this.props.children }
        </section>
        <Footer paths={this.availablePaths()} path={this.currentPath()} />
      </div>
    );
  }
};

render((
  <Router>
    <Route path="/" component={Scrabble}>
      <IndexRoute component={Home}/>
      <Route path="shuffle" component={Shuffle} />
      <Route path="square" component={Square} />
      <Route path="scrabble" component={Scrabble} />
      <Route path="laboratory" component={Laboratory} />
    </Route>
  </Router>
), document.getElementById('render-target'))
