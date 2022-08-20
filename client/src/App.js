import './App.css';
import React from 'react';
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Create from './Pages/Create'
import About from './Pages/About'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'><Landing/></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/create'><Create/></Route>
      <Route path='/about'><About/></Route>
      </Switch>
    </>
    
  );
}

export default App;
