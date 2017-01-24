import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Template from './components/Template';
import IndexPage from './components/IndexPage';
import SneakerPage from './components/SneakerPage';


const routes = (
  <Route path="/" component={Template}>
    <IndexRoute component={IndexPage}/>
    <Route path="sneaker/:id" component={SneakerPage}/>
   
  </Route>
);

export default routes;