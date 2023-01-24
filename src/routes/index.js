import React from 'react';
import {
  HashRouter,
  Routes as RouterRoutes,
  Route
} from 'react-router-dom';

import HomePage from '../components/HomePage'

function Routes (){
  return (
    <HashRouter>
      <RouterRoutes>
        <Route exact path="/" element={<HomePage />}/>
      </RouterRoutes>
    </HashRouter>
  )
}

export default Routes;