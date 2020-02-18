import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Loading } from './Loading';
import { Search } from './Search';
import { Plants } from './Plants/Plants';
import { PlantDetails } from './Plants/PlantDetails';
import Signup from './auth/Signup';
import Login from './auth/Login';

import { useSelector } from 'react-redux';
import { toGetLoading } from '../selectors/selectors';

export default function App() {
  const loading = useSelector(toGetLoading);

  return (
    <>
      { loading ? <Loading /> : <></> }
      <Router>
        <Search />
        <Route exact path='/plants' component={Plants}/>
        <Route path='/plants/:id' component={PlantDetails} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}
