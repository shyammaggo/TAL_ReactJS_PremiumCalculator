import React, { Component } from 'react';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    );
    
  }
}
export default App;