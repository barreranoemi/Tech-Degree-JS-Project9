import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Coffee from './components/Coffee';
import Fruit from './components/Fruit';
import Bread from './components/Bread';
import {
    BrowserRouter,
    Route,
    Switch
 } from 'react-router-dom';
 import NotFound from './components/NotFound';
 import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchForm} />
            <Route path='/Coffee' component={Coffee} />
            <Route path='/Fruit' component={Fruit} />
            <Route path='/Bread' component={Bread} />
            <Route path='/search/:topic' component={SearchResults} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;