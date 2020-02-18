import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Loading } from './Loading';
import { Search } from './Search';
import { Plants } from './Plants/Plants';
import { PlantDetails } from './Plants/PlantDetails';

import { useSelector } from 'react-redux';
import { toGetLoading } from '../selectors/selectors';

export default function App() {
  const loading = useSelector(toGetLoading);

  return (
    <>
      { loading ? <Loading /> : <></> }
      <Search />
      <Router>
        <Route exact path='/plants' component={Plants}/>
        <Route path='/plants/:id' component={PlantDetails} />
      </Router>
    </>
  );
}
