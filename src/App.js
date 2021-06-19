import React from 'react'
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './component/Home'
import Add from './component/Add'
import Vechile from './component/Vechile';
import View from './component/View'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <BrowserRouter>
    <GlobalProvider>
    <div className="App container">
      <h2>Vechile Info</h2>
      <Route exact Path='/' component ={Home} />
        <Switch>
          <Route path = '/add' component={Add} />
          <Route path = '/view' component={View} />
          <Route path = '/:id' component ={Vechile} />
        </Switch>
    </div>
    </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
